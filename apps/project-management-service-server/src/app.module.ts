import { Module } from "@nestjs/common";
import { LabelModule } from "./label/label.module";
import { ProjectModule } from "./project/project.module";
import { IssueModule } from "./issue/issue.module";
import { ProjectMemberModule } from "./projectMember/projectMember.module";
import { IssueLabelModule } from "./issueLabel/issueLabel.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    LabelModule,
    ProjectModule,
    IssueModule,
    ProjectMemberModule,
    IssueLabelModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
