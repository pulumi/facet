#!/bin/bash

# Run an initial Facet build, so the websites have something to start with.
yarn --cwd packages/facet run build

# Start services for the website, sandbox site, Storybook site, and Facet package.
yarn run concurrently \
    "yarn --cwd packages/facet run dev" \
    "yarn --cwd packages/facet run dev:storybook" \
    "yarn --cwd sites/sandbox run dev" \
    "yarn --cwd sites/website run dev" \
    --raw --kill-others
