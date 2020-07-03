//Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
            throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);

const circle2 = new Circle(obj);

console.log(Object.keys(circle2));

if('radius' in circle2) {
    console.log('Circle has a radius.');
}
