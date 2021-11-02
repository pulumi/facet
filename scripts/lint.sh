#!/bin/bash

set -o errexit -o pipefail

echo "Running lint checks..."
yarn run prettier --check .
yarn run eslint .
