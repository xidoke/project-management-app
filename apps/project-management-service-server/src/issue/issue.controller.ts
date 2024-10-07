import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IssueService } from "./issue.service";
import { IssueControllerBase } from "./base/issue.controller.base";

@swagger.ApiTags("issues")
@common.Controller("issues")
export class IssueController extends IssueControllerBase {
  constructor(
    protected readonly service: IssueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
