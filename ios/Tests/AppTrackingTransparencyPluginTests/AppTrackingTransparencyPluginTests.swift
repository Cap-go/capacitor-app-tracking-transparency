import XCTest
@testable import AppTrackingTransparencyPlugin

class AppTrackingTransparencyPluginTests: XCTestCase {
    func testPluginInitialization() throws {
        let plugin = AppTrackingTransparencyPlugin()
        XCTAssertNotNil(plugin)
        XCTAssertEqual(plugin.identifier, "AppTrackingTransparencyPlugin")
        XCTAssertEqual(plugin.jsName, "AppTrackingTransparency")
    }
}
