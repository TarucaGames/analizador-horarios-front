import { Week } from './week';

export interface ScheduleFile {
  id?: string;
  name?: string;
  weeks?: Array<Week>;
  hasErrors?: boolean;
}
