export interface Day {
  id?: string;
  name?: string;
  start?: string;
  end?: string;
  errors?: Array<string>;
  isFree?: boolean;
}
