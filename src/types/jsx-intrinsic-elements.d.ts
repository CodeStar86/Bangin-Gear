/** Minimal JSX IntrinsicElements shim to unblock compilation if React types aren't picked up */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
export {};
