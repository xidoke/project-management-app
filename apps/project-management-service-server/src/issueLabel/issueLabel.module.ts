import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IssueLabelModuleBase } from "./base/issueLabel.module.base";
import { IssueLabelService } from "./issueLabel.service";
import { IssueLabelController } from "./issueLabel.controller";

@Module({
  imports: [IssueLabelModuleBase, forwardRef(() => AuthModule)],
  controllers: [IssueLabelController],
  providers: [IssueLabelService],
  exports: [IssueLabelService],
})
export class IssueLabelModule {}
