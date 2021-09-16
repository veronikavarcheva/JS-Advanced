function solve() {
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let span = document.getElementById('result');
  console.log(input);
  span.textContent = '';
  input = input.toLowerCase();

  if (namingConvention === 'Camel Case') {
    for (let i = 0; i <= input.length - 1; i++) {
      if (input[i] === ' ') {
        let slicedLetter = input.slice(i + 1, i + 2).toUpperCase();
        span.textContent += slicedLetter;
        i += 1;
      } else {
        span.textContent += input[i];
      }
    }
  } else if (namingConvention === 'Pascal Case') {
    for (let i = 0; i <= input.length - 1; i++) {
      if (i === 0) {
        let firstLetter = input.slice(0, 1).toUpperCase();
        span.textContent += firstLetter;
        i += 1;
      }

      if (input[i] === ' ') {
        let slicedLetter = input.slice(i + 1, i + 2).toUpperCase();
        span.textContent += slicedLetter;
        i += 1;
      } else {
        span.textContent += input[i];
      }
    }
  } else {
    span.textContent = 'Error!';
  }
}