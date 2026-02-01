package ee.forgr.capacitor.apptrackingtransparency;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * App Tracking Transparency plugin for Android.
 *
 * Since App Tracking Transparency is an iOS-only framework,
 * this Android implementation always returns 'authorized' status
 * to allow transparent cross-platform usage.
 */
@CapacitorPlugin(name = "AppTrackingTransparency")
public class AppTrackingTransparencyPlugin extends Plugin {

    private final String pluginVersion = "8.1.0";

    /**
     * Returns the current tracking authorization status.
     * On Android, this always returns 'authorized' since ATT is iOS-only.
     */
    @PluginMethod
    public void getStatus(PluginCall call) {
        JSObject ret = new JSObject();
        // Android doesn't have App Tracking Transparency
        // Return 'authorized' for transparent cross-platform usage
        ret.put("status", "authorized");
        call.resolve(ret);
    }

    /**
     * Requests tracking authorization from the user.
     * On Android, this always returns 'authorized' since ATT is iOS-only.
     */
    @PluginMethod
    public void requestPermission(PluginCall call) {
        JSObject ret = new JSObject();
        // Android doesn't have App Tracking Transparency
        // Return 'authorized' for transparent cross-platform usage
        ret.put("status", "authorized");
        call.resolve(ret);
    }

    /**
     * Returns the plugin version.
     */
    @PluginMethod
    public void getPluginVersion(final PluginCall call) {
        try {
            final JSObject ret = new JSObject();
            ret.put("version", this.pluginVersion);
            call.resolve(ret);
        } catch (final Exception e) {
            call.reject("Could not get plugin version", e);
        }
    }
}
