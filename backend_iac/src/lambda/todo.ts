import { aws_lambda } from 'aws-cdk-lib';

const handler = (event: Record<string, unknown>) => {
  console.log('Event?:', JSON.stringify(event, null, 2));
  console.log('Production?:', process.env.isProduction);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/json' },
    body: JSON.stringify({
      message: `Hello, CDK friends! You've hit ${event.path}`,
    }),
  };
};

export { handler };
