import { describe, it, expect } from 'vitest';
import { deviceSherlock } from '../src/index';

describe('deviceSherlock', () => {
  it('mobile devices - iOS Phone and Safari Browser', () => {
    const userAgent = `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(true);
    expect(deviceSherlock.isIos).toBe(true);
    expect(deviceSherlock.isAndroid).toBe(false);
    expect(deviceSherlock.isDesktop).toBe(false);
    expect(deviceSherlock.isMobileOrTablet).toBe(true);
    expect(deviceSherlock.isDesktopOrTablet).toBe(false);
  });

  it('mobile devices - Android / Google Pixel 8 Phone and Chrome Browser', () => {
    const userAgent = `Mozilla/5.0 (Linux; Android 12; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(true);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(true);
    expect(deviceSherlock.isDesktop).toBe(false);
    expect(deviceSherlock.isMobileOrTablet).toBe(true);
    expect(deviceSherlock.isDesktopOrTablet).toBe(false);
  });

  it('mobile devices - Android / Samsung Galaxy S21 Ultra and Samsung Browser', () => {
    const userAgent = `Mozilla/5.0 (Linux; Android 11; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.0 Chrome/83.0.4103.106 Mobile Safari/537.36`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(true);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(true);
    expect(deviceSherlock.isDesktop).toBe(false);
    expect(deviceSherlock.isMobileOrTablet).toBe(true);
    expect(deviceSherlock.isDesktopOrTablet).toBe(false);
  });

  it('mobile devices - Android / Huawei P50 and Firefox Browser', () => {
    const userAgent = `Mozilla/5.0 (Linux; Android 10; HUAWEI P50) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/89.0 Mobile`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(true);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(true);
    expect(deviceSherlock.isDesktop).toBe(false);
    expect(deviceSherlock.isMobileOrTablet).toBe(true);
    expect(deviceSherlock.isDesktopOrTablet).toBe(false);
  });

  it('desktop environments - MacOS & Safari', () => {
    const userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(false);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(false);
    expect(deviceSherlock.isDesktop).toBe(true);
    expect(deviceSherlock.isMobileOrTablet).toBe(false);
    expect(deviceSherlock.isDesktopOrTablet).toBe(true);
    expect(deviceSherlock.isMacOS).toBe(true);
    expect(deviceSherlock.isApple).toBe(true);
    expect(deviceSherlock.isWindows).toBe(false);
    expect(deviceSherlock.isLinux).toBe(false);
    expect(deviceSherlock.isSafari).toBe(true);
    expect(deviceSherlock.isChrome).toBe(false);
    expect(deviceSherlock.isFirefox).toBe(false);
  });

  it('desktop environments - Linux & Chromium', () => {
    const userAgent = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(false);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(false);
    expect(deviceSherlock.isDesktop).toBe(true);
    expect(deviceSherlock.isMobileOrTablet).toBe(false);
    expect(deviceSherlock.isDesktopOrTablet).toBe(true);
    expect(deviceSherlock.isMacOS).toBe(false);
    expect(deviceSherlock.isApple).toBe(false);
    expect(deviceSherlock.isWindows).toBe(false);
    expect(deviceSherlock.isLinux).toBe(true);
    expect(deviceSherlock.isSafari).toBe(false);
    expect(deviceSherlock.isChrome).toBe(true);
    expect(deviceSherlock.isFirefox).toBe(false);
  });

  it('desktop environments - Windows & Firefox', () => {
    const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0`;
    deviceSherlock.setUserAgent(userAgent);
    expect(deviceSherlock.userAgent).toBe(userAgent);
    expect(deviceSherlock.isMobile).toBe(false);
    expect(deviceSherlock.isIos).toBe(false);
    expect(deviceSherlock.isAndroid).toBe(false);
    expect(deviceSherlock.isDesktop).toBe(true);
    expect(deviceSherlock.isMobileOrTablet).toBe(false);
    expect(deviceSherlock.isDesktopOrTablet).toBe(true);
    expect(deviceSherlock.isMacOS).toBe(false);
    expect(deviceSherlock.isApple).toBe(false);
    expect(deviceSherlock.isWindows).toBe(true);
    expect(deviceSherlock.isLinux).toBe(false);
    expect(deviceSherlock.isSafari).toBe(false);
    expect(deviceSherlock.isChrome).toBe(false);
    expect(deviceSherlock.isFirefox).toBe(true);
  });

  it('detect current environment', () => {
    expect(deviceSherlock.userAgent).not.toBeNull();
    expect(deviceSherlock.userAgent).not.toBeUndefined();
    expect(deviceSherlock.userAgent).toBeTypeOf('string');
    expect(deviceSherlock.userAgent).not.toBe('');
  });
});
