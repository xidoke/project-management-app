import { Module } from "@nestjs/common";
import { ProjectMemberModuleBase } from "./base/projectMember.module.base";
import { ProjectMemberService } from "./projectMember.service";
import { ProjectMemberController } from "./projectMember.controller";

@Module({
  imports: [ProjectMemberModuleBase],
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService],
  exports: [ProjectMemberService],
})
export class ProjectMemberModule {}
