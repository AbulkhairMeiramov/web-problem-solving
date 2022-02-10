let field = [];

const plant = (seed, water, fert, temp) => {
    if(temp >= 20 && temp <= 30){
        for(let i = 0; i < water; i++){
            for(let c = 0; c < water; c++){
                field.push('-');
            }
            
            for(let j = 0; j < fert; j++){
                field.push(seed);
            }
        }

        return field;
    } else {
        for(let d = 0; d < water*fert; d++){
            field.push('-');
        }

        field.push(seed);

        return field;
    }
}

// console.log(plant('#', 1, 5, 30));
// console.log(plant('&', 5, 1, 20));
// console.log(plant('$', 3, 3, 15));

