import fs from 'fs';
import path from 'path';

export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/adminFieldAddScreen.e2e.js',
    ],
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['-headless'] // Optionally, use headless mode for Firefox
        },
        acceptInsecureCerts: true
    }],

    onPrepare: function (capabilities, specs) {
        const allureResultsDir = path.join(__dirname, './allure-results');

        // Clean allure-results directory before each run
        if (fs.existsSync(allureResultsDir)) {
            fs.rmdirSync(allureResultsDir, { recursive: true });
        }
        fs.mkdirSync(allureResultsDir);
    },

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Reporting
    reporters: [
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true // Optional, depending on your needs
        }],
        'spec' // You can add other reporters as needed
    ],

    // Mocha Options
    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },

    //
    // =====
    // Hooks
    // =====
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};
