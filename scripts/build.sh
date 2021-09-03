#!/bin/bash

rm -rf dist storybook-static
yarn run build
yarn run build:storybook
