export {};

declare global {
  interface Window {
    deepLinkUrl: string;
    deepLinkMomondoUrl: string;
    deepLinkSmartFaresUrl: string;
    deepLinkCheapflights: string;
    comparePanelUrl: string;
    store: any;
  }
}
