import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProjectMemberModuleBase } from "./base/projectMember.module.base";
import { ProjectMemberService } from "./projectMember.service";
import { ProjectMemberController } from "./projectMember.controller";

@Module({
  imports: [ProjectMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService],
  exports: [ProjectMemberService],
})
export class ProjectMemberModule {}
