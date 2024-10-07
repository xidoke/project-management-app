import { Module } from "@nestjs/common";
import { IssueModuleBase } from "./base/issue.module.base";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";

@Module({
  imports: [IssueModuleBase],
  controllers: [IssueController],
  providers: [IssueService],
  exports: [IssueService],
})
export class IssueModule {}
