const gaugingButton = () => {
   const gaugingButton = document.querySelector('.gauging-button'),
      popupCheck = document.querySelector('.popup-check'),
      input = popupCheck.querySelectorAll('input');

   gaugingButton.addEventListener('click', () => {
      popupCheck.style.display = 'block';
      input.forEach((item) => {
         item.setAttribute('required', 'true');
      });

   });

   popupCheck.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('popup-close')) {
         popupCheck.style.display = 'none';
         input.forEach((item) => {
            item.removeAttribute('required');
            item.value = '';
         });
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popupCheck.style.display = 'none';
            input.forEach((item) => {
               item.removeAttribute('required');
               item.value = '';
            });
         }
      }
   });


};
export default gaugingButton;