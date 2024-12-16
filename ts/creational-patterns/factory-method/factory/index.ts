import { DefaultFactory, ShirtFactory, ShoeFactory } from "./factories";

const defaultFactory = new DefaultFactory();
console.log(defaultFactory.make());

const gildanFactory = new ShirtFactory();
console.log(gildanFactory.make());

const nikeFactory = new ShoeFactory();
console.log(nikeFactory.make());
