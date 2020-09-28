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

   const input = document.querySelector('.onoffswitch-checkbox'),
      selectBox = document.querySelectorAll('.title-text')[1],
      calcResult = document.querySelector('#calc-result');


   selectBox.style.display = 'none';
   selectBox.nextElementSibling.style.display = 'none';
   selectBox.nextElementSibling.nextElementSibling.style.display = 'none';


   const expand = document.querySelector('.expand'),
      circleExpand = document.querySelectorAll('.expand')[1],
      bottom = document.querySelector('#myonoffswitch-two'),
      secondExpand = document.querySelectorAll('.expand')[2],
      secondCircleExpand = document.querySelectorAll('.expand')[3],
      popupDiscount = document.querySelector('.popup-discount');


   const countSum = (price) => {
      let d = 0,
         numOfC = 0,
         bottomVal = 0,
         secondPrice = 0,
         secondB = 0,
         secondNumOfC = 0,
         fullSecondPrice = 0;
      const typeValue = +expand.options[expand.selectedIndex].value.substr(0, 1),
         circleValue = +circleExpand.options[circleExpand.selectedIndex].value.substr(0, 1),
         secondTypeValue = +secondExpand.options[secondExpand.selectedIndex].value.substr(0, 1),
         secondCircleValue = +secondCircleExpand.options[secondCircleExpand.selectedIndex].value.substr(0, 1);


      if (!input.checked) {
         secondPrice = 5000;

         if (secondTypeValue === 2) {
            secondB = secondPrice + (secondPrice * 0.2);
         } else {
            secondB = secondPrice;
         }

         if (secondCircleValue === 2) {
            secondNumOfC = secondB * 0.2;
         } else if (secondCircleValue === 3) {
            secondNumOfC = secondB * 0.4;
         }
         fullSecondPrice = secondB + secondNumOfC;
      }

      if (typeValue === 2) {
         d = price + (price * 0.2);
      } else {
         d = price;
      }

      if (circleValue === 2) {
         numOfC = d * 0.3;
      } else if (circleValue === 3) {
         numOfC = d * 0.5;
      }

      if (bottom.checked) {
         if (!input.checked) {
            bottomVal = (d + numOfC + fullSecondPrice) * 0.2;
         } else {
            bottomVal = d * 0.1;
         }
      }


      calcResult.value = d + numOfC + bottomVal + fullSecondPrice;

   };

   const callBtn = document.querySelectorAll('.call-btn')[1];
   callBtn.addEventListener('click', () => {
      countSum(10000);
      popupDiscount.style.display = 'block';
   });

   input.addEventListener('click', () => {
      if (!input.checked) {
         selectBox.style.display = 'block';
         selectBox.nextElementSibling.style.display = 'inline-block';
         selectBox.nextElementSibling.nextElementSibling.style.display = 'inline-block';
      } else {
         selectBox.style.display = 'none';
         selectBox.nextElementSibling.style.display = 'none';
         selectBox.nextElementSibling.nextElementSibling.style.display = 'none';
      }
   });



};
export default calcAcordeon;