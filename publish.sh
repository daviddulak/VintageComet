#!/usr/bin/env bash

# Make sure to brew install s3cmd

source .env

npm run build

dist="dist/"
dist_gzip="dist_gzip/"
etag=`date +%s`

# we gzip up all files so that they are smaller
rm -Rf $dist_gzip
rsync -a --progress $dist $dist_gzip
gzip -9fr $dist_gzip
FILES=`find dist_gzip`
for FILE in $FILES; do
    NEW_FILE=${FILE/.gz/}
    if [ "${FILE}" != "${NEW_FILE}" ]; then
        mv ${FILE} ${NEW_FILE}
    fi;
done;

s3Bucket="vintagecomet.com"
s3Key=$AWSAccessKeyId
s3Secret=$AWSSecretKey

s3cmd put -M -r --exclude '*.svg' --add-header='Content-Encoding: gzip' --add-header='Cache-Control: max-age=700000' --add-header='ETag: ${etag}' --access_key=${s3Key} --secret_key=${s3Secret} ${dist_gzip} s3://${s3Bucket}/
s3cmd put -M -r -m 'image/svg+xml' --exclude '*' --include '*.svg' --add-header='Content-Encoding: gzip' --add-header='Cache-Control: max-age=700000' --add-header='ETag: ${etag}' --access_key=${s3Key} --secret_key=${s3Secret} ${dist_gzip} s3://${s3Bucket}/


