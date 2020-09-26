const accordion = () => {
   const accordion = document.querySelector('#accordion'),
      panelCollapse = accordion.querySelectorAll('.panel-collapse'),
      collapseOne = accordion.querySelector('#collapseOne');

   collapseOne.classList.add('display');

   accordion.addEventListener('click', (e) => {
      panelCollapse.forEach((elem) => {
         elem.classList.remove('display');
      });
      let target = e.target;
      if (target.closest('.panel-default')) {
         target = target.closest('.panel-default');
         target.lastElementChild.classList.add('display');
      }
   });

   const slideInDown = document.querySelector('.slideInDown'),
      panelCollapses = slideInDown.querySelectorAll('.panel-collapse'),
      collapseOneTwo = document.querySelector('#collapseOne-two');

   collapseOneTwo.classList.add('display')
   slideInDown.addEventListener('click', (e) => {
      panelCollapses.forEach((elem) => {
         elem.classList.remove('display');
      });
      let target = e.target;
      if (target.closest('.panel-default')) {
         target = target.closest('.panel-default');
         target.lastElementChild.classList.add('display');
      }
   });
};
export default accordion;