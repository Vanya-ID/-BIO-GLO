const addSentenceBtn = () => {
   const addSentenceBtn = document.querySelector('.add-sentence-btn'),
      visibleSmBlock = document.querySelector('.visible-sm-block'),
      hiddenDiv = document.querySelectorAll('.hidden');
   addSentenceBtn.addEventListener('click', () => {
      addSentenceBtn.remove();
      visibleSmBlock.classList.remove('visible-sm-block');
      hiddenDiv.forEach((elem) => {
         elem.classList.remove('hidden');
      });
   });
};
export default addSentenceBtn;