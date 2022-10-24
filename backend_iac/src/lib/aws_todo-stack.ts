import { join } from 'path';
import { aws_lambda, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class AwsTodoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const todoLambda = new aws_lambda.Function(this, 'TodoLambda', {
      code: aws_lambda.Code.fromAsset(join(__dirname, '..', 'lambda')),
      handler: 'todo.handler',
      runtime: aws_lambda.Runtime.NODEJS_16_X,
    });
  }
}
