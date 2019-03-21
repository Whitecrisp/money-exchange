// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

    let exchaged ={
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };   

    while (currency >= 50){
        exchaged.H += 1;
        currency -= 50;
    };

    while (currency >= 25){
        exchaged.Q += 1;
        currency -= 25;
    };

    while (currency >= 10){
        exchaged.D += 1;
        currency -= 10;
    };

    while (currency >= 5){
        exchaged.N += 1;
        currency -= 5;
    };   

    while (currency >= 1){
        exchaged.P += 1;
        currency -= 1;
    } ;

    for (let key in exchaged){
        if(exchaged[key] === 0){
            delete  exchaged[key];
        }
    }
    return exchaged;
}

