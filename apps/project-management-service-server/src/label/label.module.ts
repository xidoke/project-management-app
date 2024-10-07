import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LabelModuleBase } from "./base/label.module.base";
import { LabelService } from "./label.service";
import { LabelController } from "./label.controller";

@Module({
  imports: [LabelModuleBase, forwardRef(() => AuthModule)],
  controllers: [LabelController],
  providers: [LabelService],
  exports: [LabelService],
})
export class LabelModule {}
