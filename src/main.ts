import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './interceptors/logging.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //cors 설정
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
  //서버 루트 url
  app.setGlobalPrefix('v1/api')
  app.useGlobalPipes(new ValidationPipe())
  
  //글로벌 로깅 인터셉터
  app.useGlobalInterceptors(new LoggingInterceptor())

  //서버 포트
  const port: number = Number(process.env.SERVER_PORT)
  await app.listen(port, () => {
    Logger.log(`SERVER - ${port}PORT CONNECTED`)
  });
}
bootstrap();


