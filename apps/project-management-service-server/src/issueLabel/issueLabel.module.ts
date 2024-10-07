import { Module } from "@nestjs/common";
import { IssueLabelModuleBase } from "./base/issueLabel.module.base";
import { IssueLabelService } from "./issueLabel.service";
import { IssueLabelController } from "./issueLabel.controller";

@Module({
  imports: [IssueLabelModuleBase],
  controllers: [IssueLabelController],
  providers: [IssueLabelService],
  exports: [IssueLabelService],
})
export class IssueLabelModule {}
