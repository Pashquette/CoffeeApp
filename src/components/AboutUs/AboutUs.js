import aboutUsLogo from './../../images/aboutUsLogo.svg'

import './style.css'

const AboutUs = () => {
    return (
        <main className="about-us">
            <div className="container">
                <div className="about-us__title">About us</div>
                <div className="about-us__logo">
                    <img src={aboutUsLogo} alt="beans"/>
                </div>
                <div className="about-us__descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.<br/>
                    <br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>
        </main>
    );
}
 
export default AboutUs;