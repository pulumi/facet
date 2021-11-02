#!/bin/bash

set -o errexit -o pipefail

# Run an initial Facet build, so the websites have something to start with.
yarn workspace @pulumi/facet run build:tokens
yarn workspace @pulumi/facet run build:components

# Start services for the website, sandbox site, Storybook site, and Facet packages.
yarn run concurrently \
    "yarn workspace @pulumi/facet run dev:components" \
    "yarn workspace @pulumi/facet run dev:tokens" \
    "yarn workspace @pulumi/facet run dev:storybook" \
    "yarn workspace @pulumi/facet-sandbox run dev" \
    "yarn workspace @pulumi/facet-website run dev" \
    --raw --kill-others
