#!/bin/bash

set -o errexit -o pipefail

echo "Generating a new component..."
yarn workspace @pulumi/facet run stencil generate
yarn workspace @pulumi/facet run prettier --write src/components
