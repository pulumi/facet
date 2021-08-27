#!/bin/bash

yarn --cwd stencil run build

# "yarn --cwd stencil run start" \ -- This doesn't currently work because it blows out the files comprising the module. Figure it out later.

yarn run concurrently \
    "yarn run dev" \
    "yarn run storybook" \
    --raw --kill-others
