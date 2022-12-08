export interface RouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}
