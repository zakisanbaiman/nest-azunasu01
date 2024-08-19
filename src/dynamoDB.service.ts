import { Injectable } from "@nestjs/common";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

@Injectable()
export class DynamoDBService {
  ddbDocClient: DynamoDBDocumentClient;

  // DynamoDBのインスタンス作成
  constructor() {
    const ddbClient: DynamoDBClient = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: fromCognitoIdentityPool({
        clientConfig: {
          region: process.env.CREDENTIAL_REGION,
        },
        identityPoolId: process.env.IDENTITY_POOL_ID,
      }),
    });

    this.ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
  }
}
