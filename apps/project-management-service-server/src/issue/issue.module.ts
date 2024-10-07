import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IssueModuleBase } from "./base/issue.module.base";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";

@Module({
  imports: [IssueModuleBase, forwardRef(() => AuthModule)],
  controllers: [IssueController],
  providers: [IssueService],
  exports: [IssueService],
})
export class IssueModule {}
