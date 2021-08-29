#!/bin/bash

rm -rf dist storybook-static
yarn run build
yarn run build:storybook

rm -rf stencil/dist
yarn --cwd stencil run build
cp -R stencil/dist/custom-elements dist/components/ && mv dist/components/custom-elements dist/components/stencil
