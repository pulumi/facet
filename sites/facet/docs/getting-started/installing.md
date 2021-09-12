---
sidebar_position: 1
---

# Installing Facet

Facet is currently distributed as a [Node.js](https://nodejs.org/en/) library via [GitHub Packages](https://github.com/pulumi/facet/packages/952516). To install it, you'll need to obtain a [GitHub personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token), then create an `.npmrc` file to point `npm` or `yarn` to the package repository.

```bash
export GITHUB_TOKEN="your-token"
```

```bash
echo '//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@pulumi:registry=https://npm.pkg.github.com' > .npmrc
```

Once you've done that, you can install the package in the usual way

```bash
npm install @pulumi/facet
```

```bash
yarn add @pulumi/facet
```

Facet requires Node.js version 14 or greater.
