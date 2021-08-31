#!/bin/bash

yarn run concurrently \
    "yarn run dev" \
    "yarn run storybook" \
    "yarn --cwd stencil run start"\
    --raw --kill-others
