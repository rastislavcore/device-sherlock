import { getDevice } from './helper/index';

class DeviceSherlock {
  private currentUserAgent: string | undefined;
  private currentHeaders: any = {};

  setUserAgent(value: string | undefined) {
    this.currentUserAgent = value;
  }

  get userAgent() {
    return this.currentUserAgent;
  }

  setHeaders(headers: any) {
    this.currentHeaders = headers;
  }

  private get device() {
    return getDevice(this.currentHeaders, this.currentUserAgent);
  }

  get isAndroid() {
    return this.device.isAndroid;
  }

  get isApple() {
    return this.device.isApple;
  }

  get isChrome() {
    return this.device.isChrome;
  }

  get isCloudflare() {
    return this.device.isCloudflare;
  }

  get isCloudFront() {
    return this.device.isCloudFront;
  }

  get isCrawler() {
    return this.device.isCrawler;
  }

  get isDesktop() {
    return this.device.isDesktop;
  }

  get isDesktopOrTablet() {
    return this.device.isDesktopOrTablet;
  }

  get isEdge() {
    return this.device.isEdge;
  }

  get isFirefox() {
    return this.device.isFirefox;
  }

  get isIos() {
    return this.device.isIos;
  }

  get isLinux() {
    return this.device.isLinux;
  }

  get isMacOS() {
    return this.device.isMacOS;
  }

  get isMobile() {
    return this.device.isMobile;
  }

  get isMobileOrTablet() {
    return this.device.isMobileOrTablet;
  }

  get isSamsung() {
    return this.device.isSamsung;
  }

  get isSafari() {
    return this.device.isSafari;
  }

  get isTablet() {
    return this.device.isTablet;
  }

  get isUnknown() {
    return this.device.isUnknown;
  }

  get isWindows() {
    return this.device.isWindows;
  }
}

export const deviceSherlock = new DeviceSherlock();
