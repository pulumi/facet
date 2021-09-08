#!/bin/bash

# Run an initial build, so the sandbox site has something to start with.
yarn --cwd packages/facet run build

# Start servers for the sandbox, Storybook, documentation site, and Facet package,
# and watch all of them for changes.
yarn run concurrently \
    "yarn --cwd packages/facet run dev" \
    "yarn --cwd packages/facet run dev:storybook" \
    "yarn --cwd sites/sandbox run dev" \
    --raw --kill-others
