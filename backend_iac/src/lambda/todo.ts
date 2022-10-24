import { aws_lambda } from 'aws-cdk-lib';

const handler = (event: unknown) => {
  console.log('Event', JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Hello, from CDK Lambda',
  };
};

export { handler };
