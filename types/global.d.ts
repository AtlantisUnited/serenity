interface ImportMeta {
  webpackHot?: {
    accept: (callback?: () => void) => void
    dispose: (callback: (data: unknown) => void) => void
  }
}
