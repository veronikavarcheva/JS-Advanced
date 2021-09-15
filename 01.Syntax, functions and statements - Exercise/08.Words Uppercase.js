function solve(input){
    let patternLiteral = /\w+/g;
    let result = patternLiteral.exec(input); 
    let resultArr = [];
    
    while(result) {
        resultArr.push(result[0]);
        result = patternLiteral.exec(input); 
    }
   
    
    console.log(
        resultArr
        .map(x => x.toUpperCase())
        .join(', '));
}

solve('Hi, how are you?');
solve('hello');
