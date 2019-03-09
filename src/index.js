module.exports = function getZerosCount(number, base) {
    var maxi, deli;//Number and pow of this number
    var min = 0;
    var n = number;//We have  copy of number
    var sum1 = 0, sum2 = 0;
    var simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
    var divideSimple = {};//Hash for numbers and its powers.


    for (var i = 0, j = 0; base > 1; i++) {//decompose a number into prime factors
        while (base % simple[i] == 0) {
            if (simple[i] in divideSimple)//if we have this simple number in out hash ==> we add pow
                divideSimple[simple[i]] += 1;
            else
                divideSimple[simple[i]] = 1;//if we haven't this simple number in out hash ==> we add
            base = base / simple[i];

        }

    }
    var divideSimpleKeys = (Object.keys(divideSimple));//show our simple numbers
    var max = 0;

    for (var i = 0; i < divideSimpleKeys.length; i++) {
        a = (divideSimpleKeys[i]);//our number
        var b = (divideSimple[divideSimpleKeys[i]]);//pow
        var pow = (Math.pow(a, b));
        if (pow > max) {
            max = pow;
            maxi = +a;
            deli = +b;
        }
        if (+a > +min)
            min = a;


    }

    while (number !=0) {
        number = Math.floor(number / maxi);
        sum1 += number;


        n = Math.floor(n / min);
        sum2 += n;
    }
    sum1 = Math.floor(sum1 / deli);
    console.log('sum1=' + sum1);
    console.log('sum2=' + sum2);
    if (sum1 < sum2)
        return sum1;
    else return sum2;
}

