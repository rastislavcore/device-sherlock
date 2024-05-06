# Device Sherlock

Powerful, lightweight device detector module.

## Available for Javascript, Typescript, Vue, React and Angular

## Installation

NPM:

```bash
npm i device-sherlock
```

PNPM:

```bash
pnpm add device-sherlock
```

Yarn:

```bash
yarn add device-sherlock
```

## Use

```ts
import { deviceSherlock } from 'device-sherlock';
```

or:

```ts
import pkg from 'device-sherlock';
const { deviceSherlock } = pkg;
```

That's it, you can now use `deviceSherlock` in your app ✨

## Flags

You can use these flags to detect the device type.

```js
deviceSherlock.isDesktop
deviceSherlock.isMobile
deviceSherlock.isTablet
deviceSherlock.isMobileOrTablet
deviceSherlock.isDesktopOrTablet
deviceSherlock.isIos
deviceSherlock.isWindows
deviceSherlock.isMacOS
deviceSherlock.isApple
deviceSherlock.isAndroid
deviceSherlock.isFirefox
deviceSherlock.isEdge
deviceSherlock.isChrome
deviceSherlock.isSafari
deviceSherlock.isSamsung
deviceSherlock.isCrawler
deviceSherlock.isUnknown
deviceSherlock.isCloudFront
deviceSherlock.isCloudflare
deviceSherlock.userAgent
```

The user agent is also injected an accessible with `deviceSherlock.userAgent`.

## Settings

You can set the user agent manually.

```ts
deviceSherlock.setUserAgent('Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36');
```

You can define headers manually.

```ts
deviceSherlock.setHeaders({
  'CF-Device-Type': 'mobile',
  'CloudFront-Is-Mobile-Viewer': 'true',
  'CloudFront-Is-Tablet-Viewer': 'false',
  'CloudFront-Is-Desktop-Viewer': 'false',
  'CloudFront-Is-Ios-Viewer': 'false',
  'CloudFront-Is-Android-Viewer': 'true',
});
```

## Usage

### Vue, React, Angular

You can use deviceSherlock inside a `script` to access the flags.

```js
<script setup>
import { deviceSherlock } from 'device-sherlock'
```

```js
import pkg from 'device-sherlock';
const { deviceSherlock } = pkg;
</script>
```

### Switch a view

```html
<template>
  <section>
    <div v-if="deviceSherlock.isDesktop">
      Desktop
    </div>
    <div v-else-if="deviceSherlock.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>
```

## CloudFront Support

If the `user-agent` is `Amazon CloudFront`, this module checks the following headers:

- `CloudFront-Is-Mobile-Viewer`
- `CloudFront-Is-Tablet-Viewer`
- `CloudFront-Is-Desktop-Viewer`
- `CloudFront-Is-Ios-Viewer`
- `CloudFront-Is-Android-Viewer`

Here are the details about the headers: [Amazon CloudFront - Headers for determining the viewer's device type](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html#cloudfront-headers-device-type).

### Caution

`isWindows`, `isLinux` and `isMacOS` flags are not available with CloudFront.

## Cloudflare Support

This module checks the header `CF-Device-Type`.

Here are the [details about the header](https://support.cloudflare.com/hc/en-us/articles/229373388-Cache-Content-by-Device-Type-Mobile-Tablet-Desktop-).

## License

[CORE](LICENSE)

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.

## Note

This module inspired by [@healerlab/device-js](https://github.com/healerlab/device-js) module.
