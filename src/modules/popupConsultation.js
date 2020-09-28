const popupConsultation = () => {
   const consultationBtn = document.querySelector('.consultation-btn'),
      popupConsultation = document.querySelector('.popup-consultation'),
      input = popupConsultation.querySelectorAll('input');

   consultationBtn.addEventListener('click', () => {
      popupConsultation.style.display = 'block';
   });

   popupConsultation.addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('popup-close')) {
         popupConsultation.style.display = 'none';
         input.forEach((item) => {
            item.removeAttribute('required');
            item.value = '';
         });
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popupConsultation.style.display = 'none';
            input.forEach((item) => {
               item.value = '';
            });
         }
      }
   });
};
export default popupConsultation;