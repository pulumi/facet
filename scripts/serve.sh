#!/bin/bash

yarn run concurrently \
    "yarn run dev" \
    "yarn run storybook" \
    --raw --kill-others
