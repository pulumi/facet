#!/bin/bash

rm -rf \
    packages/facet/dist \
    packages/facet/storybook-static \
    packages/facet-tokens/dist \
    sites/sandbox/dist \
    sites/website/build \

yarn --cwd packages/facet run build:tokens-json
yarn --cwd packages/facet run build:tokens-public
yarn --cwd packages/facet run build:storybook
yarn --cwd packages/facet run build
yarn --cwd sites/sandbox run build
yarn --cwd sites/website run build
