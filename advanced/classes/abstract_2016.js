"use strict";
class Foo {
    foo;
    constructor(foo) {
        this.foo = foo;
    }
    print() {
        console.log(`Hey ${this.foo}`);
    }
}
class Baz extends Foo {
    baz;
    constructor(foo, baz) {
        super(foo);
        this.baz = baz;
    }
    print() {
        super.print();
        console.log(this.baz);
    }
}
const ff = new Foo('hey foo');
const bb = new Baz('hey baz', 'bar');
ff.print();
bb.print();
