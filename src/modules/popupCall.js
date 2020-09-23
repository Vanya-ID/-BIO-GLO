const popupCall = () => {

   const callBtn = Array.from(document.querySelectorAll('a[class = "call-btn"]')),
      popupCall = document.querySelector('.popup-call'),
      popupClose = popupCall.querySelector('.popup-close'),
      input = popupCall.querySelectorAll('input');

   callBtn.forEach((item) => {
      item.addEventListener('click', () => {
         popupCall.style.display = 'block';
         input.forEach((item) => {
            item.setAttribute('required', 'true');
         });
      });
   });
   // popupClose.addEventListener('click', (e) => {
   //    e.preventDefault();
   //    input.forEach((item) => {
   //       item.removeAttribute('required');
   //    });
   //    popupCall.style.display = 'none';
   // });
   popupCall.addEventListener('click', (e) => {
      let target = e.target;
      e.preventDefault();
      if (target.classList.contains('popup-close')) {
         popupCall.style.display = 'none';
         input.forEach((item) => {
            item.removeAttribute('required');
         });
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popupCall.style.display = 'none';
         }
      }
   });
};
export default popupCall;