#!/bin/bash

pushd infra
    aws sts get-caller-identity

    pulumi login
    pulumi stack select dev
    pulumi up
popd
