export interface LineChartDataItem {
  [key: string]: string | number;
}

export interface ILine {
  dataKey: string;
  stroke: string;
  name?: string;
}

export interface HoverPos {
  x: number;
  y: number;
  value: number;
  date: string;
  index: number;
  lineType: string;
  isIncome: boolean;
}

export interface LegendItem {
  color: string;
  label: string;
}

export interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  pointHoverBackgroundColor: string;
}

export interface LineChartProps {
  labels?: string[];
  datasets?: Dataset[];
}
