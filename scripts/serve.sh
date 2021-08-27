#!/bin/bash

yarn run concurrently \
    "yarn dev" \
    "yarn storybook" --raw --kill-others \
    "yarn --cwd stencil run start"
