const popupDiscount = () => {
   const popupDiscount = document.querySelector('.popup-discount'),
      discountBtn = document.querySelectorAll('.discount-btn'),
      input = popupDiscount.querySelectorAll('input'),
      accordion = document.querySelector('#accordion'),
      firstInput = accordion.querySelector('.onoffswitch-checkbox'),
      expand = accordion.querySelectorAll('.expand'),
      secondInput = accordion.querySelector('#myonoffswitch-two'),
      textImput = accordion.querySelector('input[type="text"]');
   discountBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
         popupDiscount.style.display = 'block';
         input.forEach((item) => {
            item.setAttribute('required', 'true');
         });
      });
   });
   popupDiscount.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('popup-close')) {
         popupDiscount.style.display = 'none';
         input.forEach((item) => {
            item.removeAttribute('required');
            item.value = '';
         });

      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popupDiscount.style.display = 'none';
            input.forEach((item) => {
               item.removeAttribute('required');
               item.value = '';
            });
         }
      }
   });
};
export default popupDiscount;