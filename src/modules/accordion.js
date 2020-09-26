const accordion = () => {
   const accordion = document.querySelector('#accordion'),
      panelHeading = accordion.querySelectorAll('.panel-heading');
   panelHeading.forEach((elem) => {
      elem.addEventListener('click', (e) => {
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
      panelCollapses = slideInDown.querySelectorAll('.panel-collapse'),
      collapseOneTwo = document.querySelector('#collapseOne-two');


   slideInDown.addEventListener('click', (e) => {
      panelCollapses.forEach((elem) => {
         elem.classList.remove('in');
      });
      let target = e.target;
      if (target.closest('.panel-default')) {
         target = target.closest('.panel-default');
         target.lastElementChild.classList.add('in');
      }
   });
};
export default accordion;