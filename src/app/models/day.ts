import { DayType } from './day-type-enum';

export interface Day {
  id?: string;
  name?: string;
  date?: string;
  start?: string;
  end?: string;
  errors?: Array<string>;
  isFree?: boolean;
  type?: DayType;
}
