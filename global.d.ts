declare global {
  interface Window {
    $crisp: Array<[string, string]>;
    CRISP_WEBSITE_ID: string;
  }
}

export {};
