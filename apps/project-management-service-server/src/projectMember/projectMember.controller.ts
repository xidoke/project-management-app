import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectMemberService } from "./projectMember.service";
import { ProjectMemberControllerBase } from "./base/projectMember.controller.base";

@swagger.ApiTags("projectMembers")
@common.Controller("projectMembers")
export class ProjectMemberController extends ProjectMemberControllerBase {
  constructor(
    protected readonly service: ProjectMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
