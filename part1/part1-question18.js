for (const prop in statistics) {
    if (prop.charAt(0) == 'r' || prop.charAt(0) == 'R' || statistics[prop] % 2 == 1) {
        console.log(statistics[prop]);
    }
}