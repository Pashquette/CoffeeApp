import blackLogo from './../../images/footerLogo.svg'

import './style.css'

const OurBeans = ({img, title, descr}) => {
    return (
        <main className='about-beans'>
            <div className="our-beans">
                <div className="our-beans__img">
                    <img  src={img} alt="" />
                </div>
                <div className="our-beans__block">
                    <div className="our-beans__title">
                        <h2>{title}</h2>
                    </div>
                    <div className="our-beans__logo">
                        <img src={blackLogo} alt="" />
                    </div>
                    <div className="our-beans__descr">
                        {descr}
                    </div>
                </div>
            </div>
            <div className="our-beans__line"></div>
        </main>

        

    );
}
 
export default OurBeans;