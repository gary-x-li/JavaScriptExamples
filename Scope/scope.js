function foo() {
    var a = 2;

    function bar() {
        console.log( a ); // 2
    }

    bar();
}

foo();


function outer() {
    var a = 1;
    inner();
}

function inner() {
    console.log(a); // undefined
}

outer();