/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectMemberWhereUniqueInput } from "./ProjectMemberWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectMemberUpdateInput } from "./ProjectMemberUpdateInput";

@ArgsType()
class UpdateProjectMemberArgs {
  @ApiProperty({
    required: true,
    type: () => ProjectMemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectMemberWhereUniqueInput)
  @Field(() => ProjectMemberWhereUniqueInput, { nullable: false })
  where!: ProjectMemberWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProjectMemberUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProjectMemberUpdateInput)
  @Field(() => ProjectMemberUpdateInput, { nullable: false })
  data!: ProjectMemberUpdateInput;
}

export { UpdateProjectMemberArgs as UpdateProjectMemberArgs };
