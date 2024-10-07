import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabelServiceBase } from "./base/label.service.base";

@Injectable()
export class LabelService extends LabelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
