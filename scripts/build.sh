#!/bin/bash

rm -rf dist storybook-static
yarn --cwd packages/facet run build
