// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// Check object equality helper
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.resize(400, 500);
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === "dark-theme") {
        // Dark theme
        let themesStyleId = {
            darkUI: {
                body: figma.importStyleByKeyAsync("2f060e7422a8ad17a037a250d368cf671adc0468"),
                surface: figma.importStyleByKeyAsync("15f5ffac3ec91b24089813439ffadd1f9994b29c"),
                keyline: figma.importStyleByKeyAsync("84ab0f298ea8fcd0b82ac89298ad51140ca7b75a"),
                accent: figma.importStyleByKeyAsync("1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d"),
                error: figma.importStyleByKeyAsync("00e4381cfb851f7f7c87084c5cfad11efb80cc23"),
                onAccent: figma.importStyleByKeyAsync("3fdbd43dd2463c64b94e0b81a916a606c08b0f1c"),
                onSurfaceHigh: figma.importStyleByKeyAsync("5e8e492598c4f6e18d86d87b3ad10e8567fa7fd1"),
                onSurfaceMedium: figma.importStyleByKeyAsync("9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c"),
                onSurfaceDisabled: figma.importStyleByKeyAsync("c98883e07be80be6bcd18814eb29a87797a99c6a")
            },
            lightUI: {
                body: figma.importStyleByKeyAsync("fb8c4bd281795afa9dc89334a4e51d8074377875"),
                surface: figma.importStyleByKeyAsync("a92dc99c84ddd59822f873e0a69539a4a3ff1387"),
                keyline: figma.importStyleByKeyAsync("035e2f818df36b0e4f75ff6c529d54b3ca7082cc"),
                accent: figma.importStyleByKeyAsync("38935c8773bab5e7b2c9db832b2bcc84b075b24c"),
                error: figma.importStyleByKeyAsync("4096eb67f6718f300119597d8fd6c82d47936ea0"),
                onAccent: figma.importStyleByKeyAsync("a4ced9ccbdeb78146fa1b7d24fff6b7384c84784"),
                onSurfaceHigh: figma.importStyleByKeyAsync("346e73b97981c4166f24c3c3b0008fc2a18ad662"),
                onSurfaceMedium: figma.importStyleByKeyAsync("3774208f54aa6405db7c1b7d936a17525f5b1a77"),
                onSurfaceDisabled: figma.importStyleByKeyAsync("bc1e389de2ce73a54f8a692f489650ef52667f30")
            }
        };
        function DarkThemeTraverse(node) {
            return __awaiter(this, void 0, void 0, function* () {
                let lightUIBody = yield figma.importStyleByKeyAsync("fb8c4bd281795afa9dc89334a4e51d8074377875");
                let lightUISurface = yield figma.importStyleByKeyAsync("a92dc99c84ddd59822f873e0a69539a4a3ff1387");
                let lightUIKeyline = yield figma.importStyleByKeyAsync("035e2f818df36b0e4f75ff6c529d54b3ca7082cc");
                let lightUIAccent = yield figma.importStyleByKeyAsync("38935c8773bab5e7b2c9db832b2bcc84b075b24c");
                let lightUIError = yield figma.importStyleByKeyAsync("4096eb67f6718f300119597d8fd6c82d47936ea0");
                let lightUIOnAccent = yield figma.importStyleByKeyAsync("a4ced9ccbdeb78146fa1b7d24fff6b7384c84784");
                let lightUIOnSurfaceHigh = yield figma.importStyleByKeyAsync("346e73b97981c4166f24c3c3b0008fc2a18ad662");
                let lightUIOnSurfaceMedium = yield figma.importStyleByKeyAsync("3774208f54aa6405db7c1b7d936a17525f5b1a77");
                let lightUIOnSurfaceDisabled = yield figma.importStyleByKeyAsync("bc1e389de2ce73a54f8a692f489650ef52667f30");
                console.log(node.strokeStyleId);
                switch (node.strokeStyleId) {
                    case lightUIAccent.id:
                        themesStyleId.darkUI.accent.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case lightUIError.id:
                        themesStyleId.darkUI.error.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case lightUIKeyline.id:
                        themesStyleId.darkUI.keyline.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case lightUIAccent.id:
                        themesStyleId.darkUI.accent.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                }
                switch (node.fillStyleId) {
                    case lightUIBody.id:
                        themesStyleId.darkUI.body.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUISurface.id:
                        themesStyleId.darkUI.surface.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIKeyline.id:
                        themesStyleId.darkUI.keyline.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIAccent.id:
                        themesStyleId.darkUI.accent.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIError.id:
                        themesStyleId.darkUI.error.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIOnAccent.id:
                        themesStyleId.darkUI.onAccent.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIOnSurfaceHigh.id:
                        themesStyleId.darkUI.onSurfaceHigh.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIOnSurfaceMedium.id:
                        themesStyleId.darkUI.onSurfaceMedium.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case lightUIOnSurfaceDisabled.id:
                        themesStyleId.darkUI.onSurfaceDisabled.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                }
                // do nothing below
                if ("children" in node) {
                    for (const child of node.children) {
                        DarkThemeTraverse(child);
                    }
                }
                else {
                    // do nothing
                }
            });
        }
        DarkThemeTraverse(figma.currentPage.selection[0]);
    }
    else if (msg.type === "light-theme") {
        // Light Theme
        // This plugin creates 5 rectangles on the screen.
        let themesStyleId = {
            darkUI: {
                body: figma.importStyleByKeyAsync("2f060e7422a8ad17a037a250d368cf671adc0468"),
                surface: figma.importStyleByKeyAsync("15f5ffac3ec91b24089813439ffadd1f9994b29c"),
                keyline: figma.importStyleByKeyAsync("84ab0f298ea8fcd0b82ac89298ad51140ca7b75a"),
                accent: figma.importStyleByKeyAsync("1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d"),
                error: figma.importStyleByKeyAsync("00e4381cfb851f7f7c87084c5cfad11efb80cc23"),
                onAccent: figma.importStyleByKeyAsync("3fdbd43dd2463c64b94e0b81a916a606c08b0f1c"),
                onSurfaceHigh: figma.importStyleByKeyAsync("5e8e492598c4f6e18d86d87b3ad10e8567fa7fd1"),
                onSurfaceMedium: figma.importStyleByKeyAsync("9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c"),
                onSurfaceDisabled: figma.importStyleByKeyAsync("c98883e07be80be6bcd18814eb29a87797a99c6a")
            },
            lightUI: {
                body: figma.importStyleByKeyAsync("fb8c4bd281795afa9dc89334a4e51d8074377875"),
                surface: figma.importStyleByKeyAsync("a92dc99c84ddd59822f873e0a69539a4a3ff1387"),
                keyline: figma.importStyleByKeyAsync("035e2f818df36b0e4f75ff6c529d54b3ca7082cc"),
                accent: figma.importStyleByKeyAsync("38935c8773bab5e7b2c9db832b2bcc84b075b24c"),
                error: figma.importStyleByKeyAsync("4096eb67f6718f300119597d8fd6c82d47936ea0"),
                onAccent: figma.importStyleByKeyAsync("a4ced9ccbdeb78146fa1b7d24fff6b7384c84784"),
                onSurfaceHigh: figma.importStyleByKeyAsync("346e73b97981c4166f24c3c3b0008fc2a18ad662"),
                onSurfaceMedium: figma.importStyleByKeyAsync("3774208f54aa6405db7c1b7d936a17525f5b1a77"),
                onSurfaceDisabled: figma.importStyleByKeyAsync("bc1e389de2ce73a54f8a692f489650ef52667f30")
            }
        };
        function LightThemeTraverse(node) {
            return __awaiter(this, void 0, void 0, function* () {
                let darkUIBody = yield figma.importStyleByKeyAsync("2f060e7422a8ad17a037a250d368cf671adc0468");
                let darkUISurface = yield figma.importStyleByKeyAsync("15f5ffac3ec91b24089813439ffadd1f9994b29c");
                let darkUIKeyline = yield figma.importStyleByKeyAsync("84ab0f298ea8fcd0b82ac89298ad51140ca7b75a");
                let darkUIAccent = yield figma.importStyleByKeyAsync("1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d");
                let darkUIError = yield figma.importStyleByKeyAsync("00e4381cfb851f7f7c87084c5cfad11efb80cc23");
                let darkUIOnAccent = yield figma.importStyleByKeyAsync("3fdbd43dd2463c64b94e0b81a916a606c08b0f1c");
                let darkUIOnSurfaceHigh = yield figma.importStyleByKeyAsync("5e8e492598c4f6e18d86d87b3ad10e8567fa7fd1");
                let darkUIOnSurfaceMedium = yield figma.importStyleByKeyAsync("9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c");
                let darkUIOnSurfaceDisabled = yield figma.importStyleByKeyAsync("c98883e07be80be6bcd18814eb29a87797a99c6a");
                console.log(node.strokeStyleId);
                switch (node.strokeStyleId) {
                    case darkUIAccent.id:
                        themesStyleId.lightUI.accent.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case darkUIError.id:
                        themesStyleId.lightUI.error.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case darkUIKeyline.id:
                        themesStyleId.lightUI.keyline.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                    case darkUIAccent.id:
                        themesStyleId.lightUI.accent.then(resp => {
                            node.strokeStyleId = resp.id;
                        });
                        break;
                }
                switch (node.fillStyleId) {
                    case darkUIBody.id:
                        themesStyleId.lightUI.body.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUISurface.id:
                        themesStyleId.lightUI.surface.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIKeyline.id:
                        themesStyleId.lightUI.keyline.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIAccent.id:
                        themesStyleId.lightUI.accent.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIError.id:
                        themesStyleId.lightUI.error.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIOnAccent.id:
                        themesStyleId.lightUI.onAccent.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIOnSurfaceHigh.id:
                        themesStyleId.lightUI.onSurfaceHigh.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIOnSurfaceMedium.id:
                        themesStyleId.lightUI.onSurfaceMedium.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                    case darkUIOnSurfaceDisabled.id:
                        themesStyleId.lightUI.onSurfaceDisabled.then(resp => {
                            node.fillStyleId = resp.id;
                        });
                        break;
                }
                // do nothing below
                if ("children" in node) {
                    for (const child of node.children) {
                        LightThemeTraverse(child);
                    }
                }
                else {
                    // do nothing
                }
            });
        }
        LightThemeTraverse(figma.currentPage.selection[0]);
    }
    else if (msg.type === "color-checker") {
        function clone(val) {
            return JSON.parse(JSON.stringify(val));
        }
        let strayFill = 0;
        let strayStroke = 0;
        function ColorCheckTraverse(node) {
            if ("fills" && "strokes" in node) {
                // Filter warning stroke function
                let filterWarningStroke = function (stroke) {
                    console.log("clear out");
                    if (stroke.type == "SOLID" &&
                        isEquivalent(stroke.color, { r: 1, g: 0, b: 0 })) {
                        console.log("yes");
                        return false;
                    }
                    else {
                        console.log("no");
                        return true;
                    }
                };
                let newStrokes = node.strokes.filter(filterWarningStroke);
                // console.log(node.strokes, newStrokes);
                if (node.strokeStyleId.length > 0) {
                    // do nothing
                }
                else {
                    node.strokes = newStrokes;
                }
                // // Add warning stroke function
                let addWarningStroke = function (node) {
                    let strokes = clone(node.strokes);
                    let warningStrokeProperty = {
                        color: { r: 1, g: 0, b: 0 },
                        opacity: 1,
                        type: "SOLID",
                        blendMode: "NORMAL",
                        visible: true
                    };
                    strokes.push(warningStrokeProperty);
                    node.strokes = strokes;
                    node.strokeAlign = "OUTSIDE";
                };
                // Check Fill
                if (node.fills.length > 0) {
                    if (node.fillStyleId.length > 0) {
                        console.log("✅ Good fill");
                    }
                    else {
                        console.log("❌ Bad fill");
                        // Add warning stroke
                        addWarningStroke(node);
                        strayFill++;
                    }
                }
                else {
                    console.log("no fill");
                }
                // Check Stroke
                if (node.strokes.length > 0) {
                    if (node.strokeStyleId.length > 0) {
                        console.log("✅ Good stroke");
                    }
                    else {
                        console.log("❌ Bad stroke");
                        // // Add warning stroke
                        addWarningStroke(node);
                        strayStroke++;
                    }
                }
                else {
                    console.log("no stroke");
                }
                // asdf
            }
            else {
                console.log("No fill & stroke property");
            }
            if ("children" in node) {
                for (const child of node.children) {
                    ColorCheckTraverse(child);
                }
            }
            else {
                // do nothing
            }
        }
        ColorCheckTraverse(figma.currentPage.selection[0]);
        if (strayFill > 0 || strayStroke > 0) {
            alert("You have " +
                strayFill +
                " fills and " +
                strayStroke +
                " strokes not using colours from our library!");
        }
        else {
            alert("👏 All is good in the hood!");
        }
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
