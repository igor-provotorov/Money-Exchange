module.exports = function makeExchange(currency) {

    if (currency <= 0) return {};
    if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {

        let H, Q, D, N, P, result;

        H = parseInt(currency / 50);
        Q = parseInt((currency - H * 50) / 25) 
        D = parseInt((currency - H * 50 - Q * 25) / 10)
        N = parseInt((currency - H * 50 - Q * 25 - D * 10) / 5);
        P = parseInt((currency - H * 50 - Q * 25 - D * 10 - N * 5) / 1);

        result = {
            "H": H,
            "Q": Q,
            "D": D,
            "N": N,
            "P": P
        };

        for(let key in result) {
            if (result[key] === 0) delete result[key];
        }
        
        return result;
    }
}
