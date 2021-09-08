#!/bin/bash

rm -rf \
    packages/facet/dist \
    packages/facet/storybook-static \
    sites/sandbox/dist \
    sites/website/build \

yarn --cwd packages/facet run build
yarn --cwd packages/facet run build:storybook
yarn --cwd sites/sandbox run build
yarn --cwd sites/website run build
