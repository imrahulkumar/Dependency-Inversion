import { Math } from '../abstractMethod/abstract-method';

export class SimpleMath implements Math {
  add(x: number, y: number) {
    return x + y;
  }

  multiply(x: number, y: number) {
    return x * y;
  }
}

export class DoubleSimpleMath implements Math {
  add(x: number, y: number) {
    return 2 * (x + y);
  }

  multiply(x: number, y: number) {
    return 2 * (x * y);
  }
}
