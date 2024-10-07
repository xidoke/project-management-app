import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueServiceBase } from "./base/issue.service.base";

@Injectable()
export class IssueService extends IssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
