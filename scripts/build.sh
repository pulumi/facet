#!/bin/bash

rm -rf dist storybook-static
yarn run build
yarn run build:storybook

rm -rf stencil/dist
yarn --cwd stencil run build

mkdir -p dist/components/stencil
cp stencil/dist/index.js dist/components/stencil/
