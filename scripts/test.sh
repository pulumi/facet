#!/bin/bash

set -o errexit -o pipefail

echo "Running component tests..."
yarn workspace @pulumi/facet run test:components
