export interface Product {
  make(): string;
}

export class Product {
  make(): string {
    return "A product has been made.";
  }
}

export class Shirt {
  make(): string {
    return "A shirt has been made.";
  }
}

export class Shoe {
  make(): string {
    return "A pair of shoes has been made.";
  }
}
