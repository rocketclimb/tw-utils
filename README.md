# tw-utils

![npm](https://img.shields.io/npm/v/tw-utils)
![License](https://img.shields.io/github/license/rocketclimb/tw-utils)
![Build](https://github.com/rocketclimb/tw-utils/actions/workflows/push.yml/badge.svg)

## Overview

`tw-utils` is a utility library designed to assist in parsing Tailwind CSS configurations on creating Tailwind plugins.

## Features

- Parse Tailwind CSS configuration files easily.
- Parse extend configuration merging with default or base configuration

## Installation

To install `tw-utils`, use npm or yarn:

```sh
npm install tw-utils

# or

yarn add tw-utils
```

## Usage

Parsing Tailwind Config
You can use tw-utils to parse your Tailwind CSS configuration file. Here’s an example:

```typescript
import { configResolver } from "./config-resolver";
// config is the Tailwind helper for looking up values in the user’s Tailwind configuration as documented at https://tailwindcss.com/docs/plugins
configResolver("path", config);
```

### Resolver options

```typescript
export type ResolverOptions<T> = {
  rootPath?: string; // change the intial path for the lookup
  defaultConfig?: T; // add default configuration
};
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
