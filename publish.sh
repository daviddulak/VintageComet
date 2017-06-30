#!/usr/bin/env bash

# Make sure to brew install s3cmd

npm run build

dist="dist/"

s3Bucket="vintagecomet.com"
s3Key="AKIAIIAGFH3GAHCYCHAQ"
s3Secret="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"

s3cmd put -M -r --exclude '*.svg' --access_key=${s3Key} --secret_key=${s3Secret} ${dist} s3://${s3Bucket}/
s3cmd put -M -r -m 'image/svg+xml' --exclude '*' --include '*.svg' --access_key=${s3Key} --secret_key=${s3Secret} ${dist} s3://${s3Bucket}/


