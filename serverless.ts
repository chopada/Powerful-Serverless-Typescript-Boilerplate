import * as bookFunctions from '@functions/books';
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'powerful-serverless-typescript-boilerplate',
  frameworkVersion: '2',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      NODE_ENV: 'dev'
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { ...bookFunctions },
  package: {
    individually: true, include:
      ['config/.env.dev']
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
