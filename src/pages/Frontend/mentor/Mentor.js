import React from 'react';
import mentorRight from "../../../image/frontEnd/mentorRight.png";
import mentorCenter from "../../../image/frontEnd/mentorCenter.png";
import mentorLeft from "../../../image/frontEnd/mentorLeft.png";
import './mentor.scss'
import Slider from "react-slick";
import SliderIcon1 from "../../../image/main/check1.svg"
import SliderIcon2 from "../../../image/main/check.svg"


const Mentor = () => {

    let settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 320,
                settings : {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            }
        ]
    };

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // };
    return (
        <div id="mentor">
            <div className="container">
                <div className="mentor">
                    <div className="mentor--title">
                        <h2>Лучшие менторы</h2><br/>
                        <h3>по всему Кыргызстану</h3>
                    </div>

                    <Slider {...settings}>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>Ахырхан Кайратов</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorCenter} alt=""/>
                                <h3>Юля Гавриенко</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>Алишер Бекназаров</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>Алишер Бекназаров</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>Алишер Бекназаров</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">

                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>Ахырхан Кайратов</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                        </div>
                    </Slider>

                    <div className="mentor--connection">
                        <div className="mentor--connection__text">
                            <h2>Самая оперативная <br/>и качественная <br/>обратная связь</h2>
                            <p>Наши менторы дают подробный <br/>разбор ваших работ, отмечают <br/>ошибки
                                и помогают
                                их исправить.</p>
                        </div>
                        <div className="mentor--connection__video">
                            <iframe className="video" src="https://www.youtube.com/embed/7VerRJwJP0s"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                            <iframe className="video" src="https://www.youtube.com/embed/H0ZTsv4ljcE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Mentor;