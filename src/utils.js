const closePopupByEsc = (evt) => {
    if (evt.key === `Escape`) {
        document.querySelector(`.login-popup`).classList.add(`visually-hidden`);
        window.removeEventListener(`keydown`, closePopupByEsc)
    }
}

const debounce = (func, wait, immediate) => {
    let timeout;
  
    return function executedFunction() {
        const context = this;
        const args = arguments;
    
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
    
        const callNow = immediate && !timeout;
    
        clearTimeout(timeout);
    
        timeout = setTimeout(later, wait);
    
        if (callNow) func.apply(context, args);
    };
};

const getDurationName = (duration) => {
    if (duration === 1) {
        return (` год`);
    } else if (1 < duration && duration < 5) {
        return (` года`);
    }

    return (` лет`);
}

const paymentFunc = (creditSum, duration, percent) => {
    const MONTH_PERCENT = percent / 12;
    return (
      creditSum * MONTH_PERCENT * (1 + 1 / ((1 + MONTH_PERCENT) ^ (duration * 12) - 1))
    )
  }

export {closePopupByEsc, debounce, getDurationName, paymentFunc}

