export interface SliderProps {
  min: number;
  max: number;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface GridType {
  rows: number;
  columns: number;
  wordBoard: string[][];
  activeCoordinates: Map<string, boolean>;
}
