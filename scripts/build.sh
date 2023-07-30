#!/bin/bash

set -o errexit -o pipefail

rm -rf \
    packages/facet/dist \
    packages/facet/storybook-static \
    packages/facet-tokens/dist \
    sites/sandbox/dist \
    sites/facet/build

# Build our design tokens and export them as JSON and as individually consumable resources (Sass, CJS, etc.). Compiles to dist/tokens.
echo "Building design tokens..."
yarn workspace @pulumi/facet run build:tokens

# Build our Stencil web-components bundle. Compiles to dist/components.
echo "Building components..."
yarn workspace @pulumi/facet build:components

# Build our self-contained bundles, facet.js and facet.min.js.
echo "Building bundles..."
yarn workspace @pulumi/facet run build:bundles

# Build the sandbox site.
echo "Building the sandbox site..."
yarn workspace @pulumi/facet-sandbox run build

# Build the Facet documentation site.
echo "Building the Facet website..."
yarn workspace @pulumi/facet-website run build

# Build Storybook.
echo "Building the Facet Storybook site..."
yarn workspace @pulumi/facet run build:storybook
