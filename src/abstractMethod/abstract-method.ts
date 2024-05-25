import { Observable } from 'rxjs';

export abstract class Math {
  abstract add(x: number, y: number): number;
  abstract multiply(x: number, y: number): number;
}

export abstract class ListService {
  abstract getListItems$: Observable<any>;
}
