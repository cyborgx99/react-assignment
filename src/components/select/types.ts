export interface SelectComponentProps<V> {
  options: V[];
  value: V;
  onChange: (value: V) => void;
}
