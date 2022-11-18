import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Point } from "src/models/Point.entity";
import { PointCreateDto } from "src/modules/user/dto/req/create.dto";
import { Repository } from "typeorm";

@Injectable()
export class PointRepository {
    constructor(
        @InjectRepository(Point)
        private readonly pointRepository: Repository<Point>,
    ) { }


    async create(body: PointCreateDto): Promise<Point> {
        return this.pointRepository.create({
            point: body.point,
            description: body.description,
            giveMethod: body.giveMethod,
            plus: body.plus,
            user: body.user
        })
    }
}