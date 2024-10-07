import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueLabelServiceBase } from "./base/issueLabel.service.base";

@Injectable()
export class IssueLabelService extends IssueLabelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
