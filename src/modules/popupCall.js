const popupCall = () => {
   const callBtn = Array.from(document.querySelectorAll('a[class = "call-btn"]'));
   console.log(callBtn);
   // popup-call
   callBtn.forEach((item) => {
      item.addEventListener('click', () => {

      });
   });
};

export default popupCall;