const accordion = () => {
   const accordion = document.querySelector('#accordion'),
      panelHeading = accordion.querySelectorAll('.panel-heading');
   panelHeading.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         let target = e.target;
         target = target.closest('.panel-heading');
         const allPanels = accordion.querySelectorAll('.collapse ');
         allPanels.forEach((elem) => {
            elem.classList.remove('in');
         });
         if (target === elem) {
            const subling = target.nextElementSibling;
            subling.classList.add('in');
         }
      });
   });


   //questions
   const slideInDown = document.querySelector('.slideInDown'),
      panelHeadingTwo = slideInDown.querySelectorAll('.panel-heading');
   panelHeadingTwo.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         let target = e.target;
         target = target.closest('.panel-heading');
         const allPanels = slideInDown.querySelectorAll('.collapse ');
         allPanels.forEach((elem) => {
            elem.classList.remove('in');
         });
         if (target === elem) {
            const subling = target.nextElementSibling;
            subling.classList.add('in');
         }
      });
   })

};
export default accordion;