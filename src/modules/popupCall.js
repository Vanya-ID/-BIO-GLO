const popupCall = () => {
   const callBtn = Array.from(document.querySelectorAll('a[class = "call-btn"]')),
      popupCall = document.querySelector('.popup-call'),
      input = popupCall.querySelectorAll('input');

   callBtn.forEach((item) => {
      item.addEventListener('click', () => {
         popupCall.style.display = 'block';
         input.forEach((item) => {
            item.setAttribute('required', 'true');
         });
      });
   });

   popupCall.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('popup-close')) {
         popupCall.style.display = 'none';
         input.forEach((item) => {
            item.removeAttribute('required');
            item.value = '';
         });
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popupCall.style.display = 'none';
            input.forEach((item) => {
               item.value = '';
            });
         }
      }
   });
};
export default popupCall;