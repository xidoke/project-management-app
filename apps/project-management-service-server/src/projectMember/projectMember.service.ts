import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectMemberServiceBase } from "./base/projectMember.service.base";

@Injectable()
export class ProjectMemberService extends ProjectMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
