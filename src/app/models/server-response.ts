import { ScheduleFile } from './schedule-file';

export interface ServerResponse {
  data?: ScheduleFile;
  errors?: Array<string>;
}
