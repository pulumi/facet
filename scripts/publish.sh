#!/bin/bash

git fetch -p
git rebase origin/master
yarn run beachball publish --yes --access public --message "Apply package updates"
