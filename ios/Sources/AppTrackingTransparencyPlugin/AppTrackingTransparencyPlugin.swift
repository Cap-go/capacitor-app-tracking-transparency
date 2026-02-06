import Foundation
import Capacitor
import AppTrackingTransparency

@objc(AppTrackingTransparencyPlugin)
public class AppTrackingTransparencyPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.1.4"
    public let identifier = "AppTrackingTransparencyPlugin"
    public let jsName = "AppTrackingTransparency"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getStatus", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "requestPermission", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    @objc func getStatus(_ call: CAPPluginCall) {
        if #available(iOS 14, *) {
            let status = ATTrackingManager.trackingAuthorizationStatus
            call.resolve(["status": statusToString(status)])
        } else {
            // iOS < 14 doesn't require tracking permission
            call.resolve(["status": "authorized"])
        }
    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        if #available(iOS 14, *) {
            ATTrackingManager.requestTrackingAuthorization { status in
                DispatchQueue.main.async {
                    call.resolve(["status": self.statusToString(status)])
                }
            }
        } else {
            // iOS < 14 doesn't require tracking permission
            call.resolve(["status": "authorized"])
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }

    @available(iOS 14, *)
    private func statusToString(_ status: ATTrackingManager.AuthorizationStatus) -> String {
        switch status {
        case .authorized:
            return "authorized"
        case .denied:
            return "denied"
        case .notDetermined:
            return "notDetermined"
        case .restricted:
            return "restricted"
        @unknown default:
            return "notDetermined"
        }
    }
}
