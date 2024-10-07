import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IssueLabelService } from "./issueLabel.service";
import { IssueLabelControllerBase } from "./base/issueLabel.controller.base";

@swagger.ApiTags("issueLabels")
@common.Controller("issueLabels")
export class IssueLabelController extends IssueLabelControllerBase {
  constructor(protected readonly service: IssueLabelService) {
    super(service);
  }
}
