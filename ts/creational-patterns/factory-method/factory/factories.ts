import { Product, Shirt, Shoe } from "./products";

export class DefaultFactory {
  setProduct(): Product {
    return new Product();
  }

  make(): string {
    const product = this.setProduct();
    return product.make();
  }
}

export class ShirtFactory extends DefaultFactory {
  setProduct(): Shirt {
    return new Shirt();
  }
}

export class ShoeFactory extends DefaultFactory {
  setProduct(): Shoe {
    return new Shoe();
  }
}
