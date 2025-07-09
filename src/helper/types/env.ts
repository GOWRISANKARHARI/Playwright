export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER_TYPE?: 'chromium' | 'firefox' | 'webkit';
      BASE_URL?: string;
      REPORT_DIR?: string;
      REPORT_NAME?: string;
      HEADLESS?: 'true' | 'false';
    }
  }
}