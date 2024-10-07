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
import { LabelService } from "../label.service";
import { LabelCreateInput } from "./LabelCreateInput";
import { Label } from "./Label";
import { LabelFindManyArgs } from "./LabelFindManyArgs";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";
import { LabelUpdateInput } from "./LabelUpdateInput";
import { IssueLabelFindManyArgs } from "../../issueLabel/base/IssueLabelFindManyArgs";
import { IssueLabel } from "../../issueLabel/base/IssueLabel";
import { IssueLabelWhereUniqueInput } from "../../issueLabel/base/IssueLabelWhereUniqueInput";

export class LabelControllerBase {
  constructor(protected readonly service: LabelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Label })
  async createLabel(@common.Body() data: LabelCreateInput): Promise<Label> {
    return await this.service.createLabel({
      data: data,
      select: {
        color: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Label] })
  @ApiNestedQuery(LabelFindManyArgs)
  async labels(@common.Req() request: Request): Promise<Label[]> {
    const args = plainToClass(LabelFindManyArgs, request.query);
    return this.service.labels({
      ...args,
      select: {
        color: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Label })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async label(
    @common.Param() params: LabelWhereUniqueInput
  ): Promise<Label | null> {
    const result = await this.service.label({
      where: params,
      select: {
        color: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Label })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLabel(
    @common.Param() params: LabelWhereUniqueInput,
    @common.Body() data: LabelUpdateInput
  ): Promise<Label | null> {
    try {
      return await this.service.updateLabel({
        where: params,
        data: data,
        select: {
          color: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Label })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLabel(
    @common.Param() params: LabelWhereUniqueInput
  ): Promise<Label | null> {
    try {
      return await this.service.deleteLabel({
        where: params,
        select: {
          color: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
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
    @common.Param() params: LabelWhereUniqueInput
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
    @common.Param() params: LabelWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        connect: body,
      },
    };
    await this.service.updateLabel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/issueLabels")
  async updateIssueLabels(
    @common.Param() params: LabelWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        set: body,
      },
    };
    await this.service.updateLabel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/issueLabels")
  async disconnectIssueLabels(
    @common.Param() params: LabelWhereUniqueInput,
    @common.Body() body: IssueLabelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issueLabels: {
        disconnect: body,
      },
    };
    await this.service.updateLabel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
