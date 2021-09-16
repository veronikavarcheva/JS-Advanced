function solve(name, population, treasury) {
     let object = {
          name: name,
          population: population,
          treasury: treasury,
          taxRate: 10,
          collectTaxes() {
               this.treasury += this.population * this.taxRate;
          },
          applyGrowth(percentage) {
               this.population += Math.floor(this.population * percentage / 100);
          },
          applyRecession(percentage) {
               this.treasury -= Math.floor(this.treasury * percentage / 100);
          }
     };

     return object;
}

const city = solve('Tortuga',
     7000,
     15000
);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
