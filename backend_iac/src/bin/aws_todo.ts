#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsTodoStack } from '../lib/aws_todo-stack';

const app = new cdk.App();
new AwsTodoStack(app, 'AwsTodoStack');
