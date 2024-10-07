import { Module } from "@nestjs/common";
import { LabelModuleBase } from "./base/label.module.base";
import { LabelService } from "./label.service";
import { LabelController } from "./label.controller";

@Module({
  imports: [LabelModuleBase],
  controllers: [LabelController],
  providers: [LabelService],
  exports: [LabelService],
})
export class LabelModule {}
