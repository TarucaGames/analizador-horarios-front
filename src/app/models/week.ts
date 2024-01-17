import { Day } from './day';

export interface Week {
  id?: string;
  name?: string;
  days?: Array<Day>;
  totalHours?: number;
  workHours?: number;
  breakHours?: number;
  nightHours?: number;
  errors?: Array<string>;
  hasErrors?: boolean;
}
