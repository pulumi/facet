#!/bin/bash

pushd infra
    pulumi login
    pulumi stack select "${PULUMI_STACK_NAME}"
    pulumi up --yes
popd

# Tag the bucket with ownership information for production buckets.
if [ "$(pulumi -C infra stack --show-name)" == "production" ]; then
    echo "Tagging the website bucket..."
    bucket_name="$(pulumi -C infra stack output bucketName)"
    aws s3api put-bucket-tagging --bucket "${bucket_name}" --tagging file://$(pwd)/scripts/bucket-tagging.json
fi
