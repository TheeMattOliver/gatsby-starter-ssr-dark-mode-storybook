## Minimal repro

Getting SSR dark mode, Themeprovider, and Storybook work together.

### What we want to happen:

We want the `ThemeProvider` component in `preview.js` to pass a `colorMode` value into the Storybook iFrame and access SSR-generated CSS variables that have been injected into the `<head>` at compile time.

### What we don't want to do:

It's possible to take a `styled-system`-like approach, by making our `<ThemeProvider>` accept a `theme` object that we can import as a CommonJS module using `@preval`, and pass that theme object in to Storybook stories or anywhere else. That all involves a bunch of extra stuff like existential getter functions that look up styles in dot-delimited objects, based on the theme.

We want to try something different:

Generate CSS variables from the values in `constants.js` and inject those into the `<head>` of the Storybook instance so that our `<ThemeProvider>` component can access them, based on the `colorMode` passed into the `<ThemeProvider>` each story is wrapped in.

Is this even possible?

Like this, which is the [Josh Comeau Gatsby SSR implementation](https://github.com/joshwcomeau/dark-mode-minimal) (watch console):

![Gatsby SSR](https://media.giphy.com/media/umG2z5DjEOPH8RyDn1/giphy.gif)

### What is currently happening:

Nothing, really. We're using our `<ThemeProvider>` component in `preview.js`, but right now, its logic is almost entirely focused on doing all its work on the server.

![Storybook dark mode decorator](https://media.giphy.com/media/XojJHvbPsoYeB9gGns/giphy.gif)

Note that the "correct" theme value is being passed into the iFrame'd `<Story>`, but nothing is happening, as expected, because the iFrame has no notion of the `contextValue` that the `<ThemeProvider>` creates in `gatsby-ssr.js`.
