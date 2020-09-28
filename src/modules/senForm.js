const sendForm = () => {


   //Отправка формы
   const errorMessage = 'Что-то пошло не так...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся';
   const allForm = document.querySelectorAll('form');
   allForm.forEach((form) => {
      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 2rem;';
      statusMessage.style.color = '#000';



      const formName = form.querySelectorAll('input[name="user_name"]'),
         accordion = document.querySelector('#accordion'),
         calcResult = document.querySelector('#calc-result'),
         onoffswitchCheckbox = accordion.querySelector('.onoffswitch-checkbox'),
         firstDiametr = accordion.querySelectorAll('.form-control')[0],
         secondDiametr = accordion.querySelectorAll('.form-control')[2],
         firstRing = accordion.querySelectorAll('.form-control')[1],
         secondRing = accordion.querySelectorAll('.form-control')[3],
         myonoffswitchTwo = accordion.querySelector('#myonoffswitch-two'),
         inputText = accordion.querySelector('input[type = "text"]'),
         question = document.querySelector('input[name= "user_quest"]');


      formName.forEach((elem) => {
         elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^ а-яё]/ig, '');
         });
      });
      question.addEventListener('input', () => {
         question.value = question.value.replace(/[^?!.,:;@ а-яё]/ig, '');
      });

      inputText.addEventListener('input', () => {
         inputText.value = inputText.value.replace(/[^0-9]/ig, '');

      });


      form.addEventListener('submit', (e) => {

         e.preventDefault();
         form.appendChild(statusMessage);
         statusMessage.textContent = '';
         let animation = `<div class="preloader todelete">
            <div class="preloader__row todelete">
              <div class="preloader__item todelete"></div>
              <div class="preloader__item todelete"></div>
            </div>
          </div>`;

         form.insertAdjacentHTML('beforeend', animation);

         const formData = new FormData(form, calcResult);
         let body = {};


         body.final_cost = calcResult.value;
         if (onoffswitchCheckbox.checked) {
            body.camers = 'Однокамерный';
            body.first_diametr = firstDiametr.value;
            body.first_ring = firstRing.value;
         } else {
            body.camers = 'Двухкамерный';
            body.first_diametr = firstDiametr.value;
            body.first_ring = firstRing.value;
            body.second_diametr = secondDiametr.value;
            body.second_ring = secondRing.value;
         }

         if (myonoffswitchTwo.checked) {
            body.botton = 'Есть днище';
         } else {
            body.botton = 'Нет днища';
         }

         body.distance_to_home = inputText.value;
         body.question = question.value;
         formData.forEach((value, key) => {
            body[key] = value;
         });
         const success = (request) => {
            const todelete = Array.from(form.querySelectorAll('.todelete'));
            todelete.forEach((item) => {
               item.remove();
            });
            if (request.status !== 200) {
               throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            const inputForm = form.querySelectorAll('input');
            inputForm.forEach(elem => {
               elem.value = '';
            });
            const deleteStatusMessage = () => {
               statusMessage.remove();
            };
            setTimeout(deleteStatusMessage, 3000);
         };
         const error = () => {
            statusMessage.textContent = errorMessage;
            console.error();
            const deleteStatusMessage = () => {
               statusMessage.remove();
               const todelete = Array.from(form.querySelectorAll('.todelete'));
               todelete.forEach((item) => {
                  item.remove();
               });
            };
            setTimeout(deleteStatusMessage, 3000);
         };
         postData(body)
            .then(success)
            .catch(error);
      });

      const postData = (body) => {
         return fetch('./server.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
         });
      };

   });

};

export default sendForm;