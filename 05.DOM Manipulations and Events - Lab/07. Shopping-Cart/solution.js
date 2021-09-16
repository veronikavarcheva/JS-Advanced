function solve() {
   let productElements = Array.from(document.querySelectorAll('.product-title'));
   let addButtons = Array.from(document.querySelectorAll('.add-product'));
   let priceElements = Array.from(document.querySelectorAll('.product-line-price'));
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkoutButton = document.querySelector('.checkout');

   let uniqueProductsList = [];
   let totalPrice = 0;
   for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', () => {
         let productName = productElements[i].textContent;
         if (!uniqueProductsList.includes(productName)) {
            uniqueProductsList.push(productName);
         }
         let productPrice = Number(priceElements[i].textContent).toFixed(2);
         totalPrice += Number(productPrice);
         textArea.value += `Added ${productName} for ${productPrice} to the cart.\n`;
      });
   };
   checkout();
   function checkout() {
      checkoutButton.addEventListener('click', () => {

         textArea.value += `You bought ${uniqueProductsList.join(', ')} for ${(totalPrice).toFixed(2)}.`
         addButtons.forEach(addButton => {
            addButton.disabled = true;
         });
         checkoutButton.disabled = true;
      });
   }
}