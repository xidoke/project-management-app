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
import { IssueService } from "../issue.service";
import { IssueCreateInput } from "./IssueCreateInput";
import { Issue } from "./Issue";
import { IssueFindManyArgs } from "./IssueFindManyArgs";
import { IssueWhereUniqueInput } from "./IssueWhereUniqueInput";
import { IssueUpdateInput } from "./IssueUpdateInput";
import { IssueLabelFindManyArgs } from "../../issueLabel/base/IssueLabelFindManyArgs";
import { IssueLabel } from "../../issueLabel/base/IssueLabel";
import { IssueLabelWhereUniqueInput } from "../../issueLabel/base/IssueLabelWhereUniqueInput";

export class IssueControllerBase {
  constructor(protected readonly service: IssueService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Issue })
  async createIssue(@common.Body() data: IssueCreateInput): Promise<Issue> {
    return await this.service.createIssue({
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Issue] })
  @ApiNestedQuery(IssueFindManyArgs)
  async issues(@common.Req() request: Request): Promise<Issue[]> {
    const args = plainToClass(IssueFindManyArgs, request.query);
    return this.service.issues({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async issue(
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<Issue | null> {
    const result = await this.service.issue({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIssue(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() data: IssueUpdateInput
  ): Promise<Issue | null> {
    try {
      return await this.service.updateIssue({
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
  @swagger.ApiOkResponse({ type: Issue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIssue(
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<Issue | null> {
    try {
      return await this.service.deleteIssue({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/issueLabels")
  @ApiNestedQuery(IssueLabelFindManyArgs)
  async findIssueLabels(
    @common.Req() request: Request,
    @common.Param() params: IssueWhereUniqueInput
  ): Promise<IssueLabel[]> {
    const query = plainToClass(IssueLabelFindManyArgs, request.query);
    const results = await this.service.findIssueLabels(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        issue: {
          select: {
            id: true,
          },
        },

        label: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/issueLabels")
  async connectIssueLabels(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        connect: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/issueLabels")
  async updateIssueLabels(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        set: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/issueLabels")
  async disconnectIssueLabels(
    @common.Param() params: IssueWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        disconnect: body,
      },
    };
    await this.service.updateIssue({
      where: params,
      data,
      select: { id: true },
    });
  }
}
