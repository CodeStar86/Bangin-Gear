/* Auto-added by Build Doctor to ensure React JSX types resolve */
/// <reference types="react" />
/// <reference types="react-dom" />

/* Some TypeScript + React setups occasionally fail to resolve the runtime types.
   This safe fallback ensures JSX is recognized even before @types are installed. */
declare module 'react/jsx-runtime' {
  export * from 'react/jsx-runtime.js';
}
