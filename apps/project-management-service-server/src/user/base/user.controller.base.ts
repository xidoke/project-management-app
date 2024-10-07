/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { IssueFindManyArgs } from "../../issue/base/IssueFindManyArgs";
import { Issue } from "../../issue/base/Issue";
import { IssueWhereUniqueInput } from "../../issue/base/IssueWhereUniqueInput";
import { ProjectMemberFindManyArgs } from "../../projectMember/base/ProjectMemberFindManyArgs";
import { ProjectMember } from "../../projectMember/base/ProjectMember";
import { ProjectMemberWhereUniqueInput } from "../../projectMember/base/ProjectMemberWhereUniqueInput";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        fullname: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        fullname: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        fullname: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          fullname: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          fullname: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/issues")
  @ApiNestedQuery(IssueFindManyArgs)
  async findIssues(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Issue[]> {
    const query = plainToClass(IssueFindManyArgs, request.query);
    const results = await this.service.findIssues(params.id, {
      ...query,
      select: {
        assigneeId: true,
        createdAt: true,
        createdBy: true,
        creator: true,
        description: true,
        id: true,
        priority: true,

        project: {
          select: {
            id: true,
          },
        },

        status: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/issues")
  async connectIssues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/issues")
  async updateIssues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/issues")
  async disconnectIssues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/projectMembers")
  @ApiNestedQuery(ProjectMemberFindManyArgs)
  async findProjectMembers(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<ProjectMember[]> {
    const query = plainToClass(ProjectMemberFindManyArgs, request.query);
    const results = await this.service.findProjectMembers(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        role: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/projectMembers")
  async connectProjectMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectMembers: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/projectMembers")
  async updateProjectMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectMembers: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/projectMembers")
  async disconnectProjectMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectMembers: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/projects")
  @ApiNestedQuery(ProjectFindManyArgs)
  async findProjects(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Project[]> {
    const query = plainToClass(ProjectFindManyArgs, request.query);
    const results = await this.service.findProjects(params.id, {
      ...query,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/projects")
  async connectProjects(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/projects")
  async updateProjects(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/projects")
  async disconnectProjects(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
