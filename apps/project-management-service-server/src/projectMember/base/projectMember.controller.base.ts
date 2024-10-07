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
import { ProjectMemberService } from "../projectMember.service";
import { ProjectMemberCreateInput } from "./ProjectMemberCreateInput";
import { ProjectMember } from "./ProjectMember";
import { ProjectMemberFindManyArgs } from "./ProjectMemberFindManyArgs";
import { ProjectMemberWhereUniqueInput } from "./ProjectMemberWhereUniqueInput";
import { ProjectMemberUpdateInput } from "./ProjectMemberUpdateInput";

export class ProjectMemberControllerBase {
  constructor(protected readonly service: ProjectMemberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProjectMember })
  async createProjectMember(
    @common.Body() data: ProjectMemberCreateInput
  ): Promise<ProjectMember> {
    return await this.service.createProjectMember({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProjectMember] })
  @ApiNestedQuery(ProjectMemberFindManyArgs)
  async projectMembers(
    @common.Req() request: Request
  ): Promise<ProjectMember[]> {
    const args = plainToClass(ProjectMemberFindManyArgs, request.query);
    return this.service.projectMembers({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProjectMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async projectMember(
    @common.Param() params: ProjectMemberWhereUniqueInput
  ): Promise<ProjectMember | null> {
    const result = await this.service.projectMember({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProjectMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProjectMember(
    @common.Param() params: ProjectMemberWhereUniqueInput,
    @common.Body() data: ProjectMemberUpdateInput
  ): Promise<ProjectMember | null> {
    try {
      return await this.service.updateProjectMember({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: ProjectMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProjectMember(
    @common.Param() params: ProjectMemberWhereUniqueInput
  ): Promise<ProjectMember | null> {
    try {
      return await this.service.deleteProjectMember({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
