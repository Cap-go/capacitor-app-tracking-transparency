/**
 * Capacitor App Tracking Transparency Plugin.
 *
 * A plugin to request and check user authorization for app tracking
 * on iOS devices. Uses Apple's App Tracking Transparency framework.
 *
 * @since 1.0.0
 */
export interface AppTrackingTransparencyPlugin {
  /**
   * Gets the current tracking authorization status without prompting the user.
   *
   * @returns Promise that resolves with the current authorization status
   * @throws Error if getting status fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { status } = await AppTrackingTransparency.getStatus();
   * if (status === 'authorized') {
   *   console.log('Tracking is authorized');
   * }
   * ```
   */
  getStatus(): Promise<AppTrackingStatusResponse>;

  /**
   * Requests user authorization to access app-related data for tracking.
   * Displays the native iOS tracking permission dialog.
   *
   * Note: This method will only show the dialog once. Subsequent calls
   * will return the stored authorization status without showing the dialog.
   *
   * @returns Promise that resolves with the authorization status after user response
   * @throws Error if requesting permission fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { status } = await AppTrackingTransparency.requestPermission();
   * switch (status) {
   *   case 'authorized':
   *     console.log('User authorized tracking');
   *     break;
   *   case 'denied':
   *     console.log('User denied tracking');
   *     break;
   *   case 'restricted':
   *     console.log('Tracking is restricted');
   *     break;
   *   case 'notDetermined':
   *     console.log('Status not determined');
   *     break;
   * }
   * ```
   */
  requestPermission(): Promise<AppTrackingStatusResponse>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { version } = await AppTrackingTransparency.getPluginVersion();
   * console.log('Plugin version:', version);
   * ```
   */
  getPluginVersion(): Promise<{ version: string }>;
}

/**
 * Response object containing the tracking authorization status.
 *
 * @since 1.0.0
 */
export interface AppTrackingStatusResponse {
  /**
   * The current tracking authorization status.
   *
   * @since 1.0.0
   */
  status: AppTrackingStatus;
}

/**
 * Possible values for the tracking authorization status.
 *
 * - `authorized`: User has authorized access to app-related data for tracking
 * - `denied`: User has denied access to app-related data for tracking
 * - `notDetermined`: User has not yet received the authorization request
 * - `restricted`: Authorization is restricted (e.g., parental controls, MDM)
 *
 * @since 1.0.0
 */
export type AppTrackingStatus =
  | 'authorized'
  | 'denied'
  | 'notDetermined'
  | 'restricted';
