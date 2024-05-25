import { of } from 'rxjs';
import { ListService } from '../abstractMethod/abstract-method';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeListService implements ListService {
  getListItems$ = of({ serviceName: 'employee', res: ['Josh', 'Kathy'] });
}
