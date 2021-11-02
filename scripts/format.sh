#!/bin/bash

set -o errexit -o pipefail

echo "Running code formatters..."
yarn run prettier --write .
