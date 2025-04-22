declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare global {
   interface Window {
      test: string[]
   }
}