import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import CreditCalc from '../credit-calculator/credit-calculator';
import logo from '../../img/logo.svg';
import Map from '../map/map'
import LoginPopup from '../login-popup/login-popup';
import SuccessOfferPopup from '../success-offer-popup/success-offer-popup'

const App = () => {

    return (
        <>
            <Header logo={logo} />
            <Slider />
            <Tabs />
            <CreditCalc />
            <Map />
            <Footer logo={logo} />
            <LoginPopup />
            <SuccessOfferPopup />
        </>
    );
}

export default App;
