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
import { IssueLabelWhereInput } from "./IssueLabelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class IssueLabelCountArgs {
  @ApiProperty({
    required: false,
    type: () => IssueLabelWhereInput,
  })
  @Field(() => IssueLabelWhereInput, { nullable: true })
  @Type(() => IssueLabelWhereInput)
  where?: IssueLabelWhereInput;
}

export { IssueLabelCountArgs as IssueLabelCountArgs };
