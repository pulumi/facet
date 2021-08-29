#!/bin/bash

git fetch -p
git rebase origin/master
yarn run beachball publish --message "Apply package updates"
