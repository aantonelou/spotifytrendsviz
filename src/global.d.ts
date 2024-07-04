export {};

declare global {
  interface Window {
    tableau: {
      Viz: new (container: HTMLElement, url: string, options: object) => void;
    };
  }
}
