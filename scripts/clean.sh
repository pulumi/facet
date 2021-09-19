#!/bin/bash

set -o errexit -o pipefail

rm -rf \
    dist \
    node_modules \
    packages/facet/dist \
    packages/facet/node_modules \
    packages/facet/storybook-static \
    packages/facet/dist \
    packages/facet/node_modules \
    sites/sandbox/dist \
    sites/sandbox/node_modules \
    sites/facet/node_modules \
    sites/facet/.docusaurus \
    sites/facet/build \
    infra/node_modules
