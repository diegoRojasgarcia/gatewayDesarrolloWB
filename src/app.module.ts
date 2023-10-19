import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: 'http://localhost:3000/graphql' },
            { name: 'equipos', url: 'http://localhost:3001/graphql' },
          ],

          // introspectionHeaders: {
          //   Authorization:
          //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk3MTc5NDgyLCJleHAiOjE2OTcxODY2ODJ9.KqhmsCtgzvPI8yIHWyzp3MGPlwCShmGQkikpB6oPylw',
          // },
        }),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
