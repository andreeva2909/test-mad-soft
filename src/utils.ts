let startedTimer = false;
const countMinutes = 2;

export const StartTimer = () => {

    // Здесь таймер работает следующим образом:
    // если отсчет уже пошел, то из LocalStorage берется значение времени, при котором начался обратный отсчет
    // если отчет окончен, то при обновлении страницы, он начинается заново (чтобы было проще тестировать)

    let startTime = new Date();

    if (!(String(localStorage.getItem('timeStart')) === '0:00')) {
        startedTimer = true; 
    }

    if (startedTimer) {
        startTime = new Date(Date.parse(String(localStorage.getItem('timeStart'))))
    }

    if (String(localStorage.getItem('timeStart')) === '0:00') {
        localStorage.setItem('timeStart', String(new Date())) 
        localStorage.setItem('questionId', '1');
        localStorage.setItem('answer', '');
    }
    
    const stopTime = startTime.setMinutes(startTime.getMinutes() + countMinutes);
  
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const remain = stopTime - now; 

      const min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
      let sec = String(Math.floor( (remain % (1000 * 60)) / 1000 ));
  
      sec = Number(sec) < 10 ? "0" + String(sec) : sec;
      
      localStorage.setItem('time', String(min + ':' + sec))

      const timerWrapper = document.getElementById('timer');
      if (timerWrapper) {
        timerWrapper.innerHTML = String(min + ':' + sec);
      }
      
       if (remain < 0) {
        localStorage.setItem('time', String('0:00'))
        localStorage.setItem('timeStart', String('0:00'))
        localStorage.setItem('questionId', '7');
        localStorage.setItem('answer', '');
        if (timerWrapper) {
            timerWrapper.innerHTML = String('0:00');
          }
        const finishWrapper = document.getElementById('finish');
        if (finishWrapper) {
            finishWrapper.style.display = 'block'
        }
        const finishButton = document.getElementById('finish-button');
        if (finishButton) {
            finishButton.style.display = 'none'
        }
        
        
        clearInterval(countdown);
       } 
    }, 1000);
  }