#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ProjectAwsStack } from '../lib/project_aws-stack';

const app = new cdk.App();
new ProjectAwsStack(app, 'ProjectAwsStack');
