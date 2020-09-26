const calcAcordeon = () => {
   const constructBtn = document.querySelectorAll('.construct-btn');
   constructBtn.forEach((elem) => {
      elem.addEventListener('click', (e) => {
         let target = e.target;
         target = target.closest('.construct-btn');
         const accordion = document.querySelector('#accordion'),
            callBtn = accordion.querySelector('.call-btn');

         if (target === callBtn) {

            return;
         }
         let parent = elem.parentNode.parentElement;
         parent.classList.remove('in');
         const panelHeading = accordion.querySelectorAll('.panel-heading');
         for (let i = 0; i < (panelHeading.length - 1); i++) {
            if (parent === panelHeading[i].nextElementSibling) {
               parent.classList.remove('in');
               panelHeading[i + 1].nextElementSibling.classList.add('in');
            }
         }
      });
   });
};
export default calcAcordeon;