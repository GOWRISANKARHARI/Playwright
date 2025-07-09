import { LaunchOptions,chromium,firefox,webkit } from "playwright"; 

const options: LaunchOptions = {
    headless: true, // Set to false if you want to see the browser UI
}
export const invokeBrowser = () => {
    const browserType = process.env.BROWSER_TYPE || 'chromium'; // Default to chromium if not specified
    switch (browserType.toLowerCase()) {
        case 'chromium':
            return chromium.launch(options);
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error(`Unsupported browser type: ${browserType}`);
    }
}
