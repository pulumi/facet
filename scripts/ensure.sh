#!/bin/bash

set -o errexit -o pipefail

yarn
yarn --cwd infra
