#!/bin/bash

set -o errexit -o pipefail

rm -rf \
    packages/facet/dist \
    packages/facet/storybook-static \
    packages/facet-tokens/dist \
    sites/sandbox/dist \
    sites/facet/build \

yarn --cwd packages/facet run build:tokens-json
yarn --cwd packages/facet run build:tokens-public
yarn --cwd packages/facet run build:storybook
yarn --cwd packages/facet run build
yarn --cwd sites/sandbox run build
yarn --cwd sites/facet run build
