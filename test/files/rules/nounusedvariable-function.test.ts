function func1(x: number, y: number) {
    return x + y;
}

var func2 = () => {
    //
};

function func3() {
    return func1(1, 2);
}

export function func4() {
    return func1(2, 3);
}

declare function func5(): any;

export default function () {
    return 0;
}
