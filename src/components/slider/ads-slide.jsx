import React from 'react';

const AdsSlide = () => {
    return (
        <div className="slider__background-wrapper slider__background-wrapper--ads">
            <div className="slider__center-wrapper slider__center-wrapper--ads center-wrapper">
                <div className="slider__credit">
                    <div className="slider__title">
                        <h2 className="slider__bank-name slider__bank-name--black">Лига Банк</h2>
                        <div className="slider__description slider__description--black slider__description--ads-mobile">Ваша уверенность в завтрашнем дне</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

// из интереса вопрос - почему если вместо дива slider__Desxription использовать span то мы не можем влиять на его размеры

export default AdsSlide;