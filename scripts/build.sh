#!/bin/bash

rm -rf dist storybook-static
yarn run build
yarn run build:storybook

rm -rf stencil/dist*
yarn --cwd stencil run build

cp -R stencil/dist dist/
mv dist/dist dist/stencil
