## Minimal repro

Getting SSR dark mode, Themeprovider, and Storybook work together.

### What we want to happen:

The `ThemeProvider` component in `preview.js` passes the context into the Storybook iFrame and can access the generated static values in `<head>`
