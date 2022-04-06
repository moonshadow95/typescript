{
    var BEANS_GRAM_PER_SHOT_1 = 7;
    var coffeeBeans_1 = 20;
    function makeCoffee(shots) {
        if (coffeeBeans_1 < shots * BEANS_GRAM_PER_SHOT_1) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans_1 -= shots * BEANS_GRAM_PER_SHOT_1;
        return {
            shots: shots,
            hasMilk: false
        };
    }
    var coffee = makeCoffee(2);
    console.log(coffee);
}
