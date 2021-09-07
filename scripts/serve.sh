#!/bin/bash

yarn run concurrently \
    "yarn --cwd packages/facet run dev" \
    "yarn --cwd packages/facet run storybook" \
    "yarn --cwd sites/sandbox run dev" \
    --raw --kill-others
