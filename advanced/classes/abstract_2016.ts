abstract class Foo {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
  print() {
    console.log(`Hey ${this.foo}`);
  }
}

class Baz extends Foo {
  constructor(foo: string, private baz: string) {
    super(foo);
  }
  override print() {
    super.print();
    console.log(this.baz);
  }
}

const ff = new Foo('hey foo');
const bb = new Baz('hey baz', 'bar');

ff.print();
bb.print();
