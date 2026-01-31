import { WebPlugin } from '@capacitor/core';

import type {
  AppTrackingTransparencyPlugin,
  AppTrackingStatusResponse,
} from './definitions';

export class AppTrackingTransparencyWeb
  extends WebPlugin
  implements AppTrackingTransparencyPlugin
{
  async getStatus(): Promise<AppTrackingStatusResponse> {
    // Web platform doesn't have tracking transparency
    // Return 'authorized' as web doesn't require this permission
    return { status: 'authorized' };
  }

  async requestPermission(): Promise<AppTrackingStatusResponse> {
    // Web platform doesn't have tracking transparency
    // Return 'authorized' as web doesn't require this permission
    return { status: 'authorized' };
  }

  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}
