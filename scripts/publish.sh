#!/bin/bash

yarn --cwd packages/facet
yarn --cwd packages/facet run build:tokens-json
yarn --cwd packages/facet run build:tokens-public
yarn --cwd packages/facet run build

git fetch -p
git rebase origin/master
yarn run beachball publish --yes --access public --message "Publish"
