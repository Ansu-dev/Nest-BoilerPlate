import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ValidationError } from 'class-validator';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //cors SetUp
  let envAllow = process.env.ALLOW_CORS_LIST
  let allowList = envAllow.split(',')
  app.enableCors({
    origin: allowList,
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
    credentials: true,
  })
  //Swagger SetUp
  const config = new DocumentBuilder()
    .setTitle('Swagger API')
    .setDescription('Swagger docs')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config, {
    include: [AppModule],
    deepScanRoutes: true,
    ignoreGlobalPrefix: true
  })
  SwaggerModule.setup('/swagger', app, document)
  //Server Root URL
  app.setGlobalPrefix('v1/api')
  app.useGlobalPipes(new ValidationPipe())

  //Global Logging Interceptor
  app.useGlobalInterceptors(new LoggingInterceptor())

  //Global ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (err: ValidationError[]) => {
        new BadRequestException({
          status: 400,
          data: {
            resultCode: -1,
            data: err[0].constraints
          }
        })
      }
    })
  )

  //Server Listen
  const port: number = Number(process.env.SERVER_PORT)
  await app.listen(port, () => {
    Logger.log(`SERVER - ${port}PORT CONNECTED`)
  });
}
bootstrap();


