export interface ErrorBoundaryStateInterface {
  hasError: boolean;
  reloading: boolean;
}

export interface ErrorPagePropsInterface {
  reload: () => void;
}
