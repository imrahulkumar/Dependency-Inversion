import { of } from 'rxjs';
import { ListService } from '../abstractMethod/abstract-method';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsListService implements ListService {
  getListItems$ = of({ serviceName: 'product', res: ['Josh', 'Kathy'] });
}
