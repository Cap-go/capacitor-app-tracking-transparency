# capacitor-app-tracking-transparency
  <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_att"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_att"> Missing a feature? We'll build the plugin for you 💪</a></h2>
</div>

Capacitor plugin for iOS App Tracking Transparency framework. Request user authorization to access app-related data for tracking.

## Why Capacitor App Tracking Transparency?

A simple, **free**, and **lightweight** plugin for iOS App Tracking Transparency:

- **iOS 14+ compliance** - Handle Apple's App Tracking Transparency requirements
- **Permission status** - Check current authorization status without prompting
- **Request permission** - Display the native iOS permission dialog
- **Cross-platform** - Returns `authorized` on Android/Web for transparent usage
- **Modern package management** - Supports both Swift Package Manager (SPM) and CocoaPods (SPM-ready for Capacitor 8)
- **Zero dependencies** - Minimal footprint, no bloat

Perfect for apps using IDFA, advertising SDKs, analytics tracking, or any feature that tracks users across apps and websites.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/app-tracking-transparency/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

```bash
npm install @capgo/capacitor-app-tracking-transparency
npx cap sync
```

## iOS

Add the `NSUserTrackingUsageDescription` key to your `Info.plist` file:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

The string should explain why you need tracking permission. This message will be displayed to users when requesting permission.

### Localizing the Permission Message

To provide localized versions of the tracking permission message, create `InfoPlist.strings` files for each language:

1. Create a `InfoPlist.strings` file in your Xcode project
2. Add the `NSUserTrackingUsageDescription` key with a localized value:

```
"NSUserTrackingUsageDescription" = "This identifier will be used to deliver personalized ads to you.";
```

## Android

App Tracking Transparency is an iOS-only framework. This plugin returns `authorized` status on Android to allow transparent cross-platform usage without conditional code.

## Web

Returns `authorized` status on Web for development purposes and transparent cross-platform usage.

## API

<docgen-index>

* [`getStatus()`](#getstatus)
* [`requestPermission()`](#requestpermission)
* [`getPluginVersion()`](#getpluginversion)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor App Tracking Transparency Plugin.

A plugin to request and check user authorization for app tracking
on iOS devices. Uses Apple's App Tracking Transparency framework.

### getStatus()

```typescript
getStatus() => Promise<AppTrackingStatusResponse>
```

Gets the current tracking authorization status without prompting the user.

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

**Since:** 1.0.0

--------------------


### requestPermission()

```typescript
requestPermission() => Promise<AppTrackingStatusResponse>
```

Requests user authorization to access app-related data for tracking.
Displays the native iOS tracking permission dialog.

Note: This method will only show the dialog once. Subsequent calls
will return the stored authorization status without showing the dialog.

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

**Since:** 1.0.0

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### AppTrackingStatusResponse

Response object containing the tracking authorization status.

| Prop         | Type                                                            | Description                                | Since |
| ------------ | --------------------------------------------------------------- | ------------------------------------------ | ----- |
| **`status`** | <code><a href="#apptrackingstatus">AppTrackingStatus</a></code> | The current tracking authorization status. | 1.0.0 |


### Type Aliases


#### AppTrackingStatus

Possible values for the tracking authorization status.

- `authorized`: User has authorized access to app-related data for tracking
- `denied`: User has denied access to app-related data for tracking
- `notDetermined`: User has not yet received the authorization request
- `restricted`: Authorization is restricted (e.g., parental controls, MDM)

<code>'authorized' | 'denied' | 'notDetermined' | 'restricted'</code>

</docgen-api>
