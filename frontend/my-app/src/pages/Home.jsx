import React, {useState,  useEffect, useContext } from 'react'
import {Link} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
// import './home.css'
import './home.css' ;

import graph_draw from '../images/graph_draw.svg';
import secondIcon from '../images/marketplace.svg';
import firstIcon from '../images/prediction_graph.svg';
import market_draw from '../images/market_draw.svg';
import about_draw from '../images/about_draw.svg';

import ContactUs from './ContactUs';

import store from '../store/store';
import Im from '../util/ImageSlider';

import CONTENT from '../Lang/home.json';

import Footer from '../util/Footer';

const Home = () => {
    const {state} = useContext(store); 
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 200){
        setShowScroll(true)    
    } else if (showScroll && window.pageYOffset < 200){
        setShowScroll(false)    
    }  
    };
    window.addEventListener('scroll', checkScrollTop)

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    useEffect(() => {
        Aos.init({ duration: 2000 });
    },[]);

    let content = CONTENT;
  
    if(state.lang ==="Hindi"){
        content = content.Hindi
    }else{
        content = content.English
    }

    return(
        <>
            <div className="body">
            <div onClick={scrollTop} className="scrolltopbtn" style={{ display: showScroll ? 'flex' : 'none'}}>Top</div>
                <main>
                    <Im />
                    <section id="features" className="features">
                        <ul className="features__list">
                            {/* //data-aos="fade-up-right" */}
                            <li data-aos="fade-up-right" >
                                <Link to='/prediction'>
                                    <img src={firstIcon} alt="prediction Icon"  width="116" height="116" ></img>
                                </Link>    
                                <p><strong>{content.firstIcon}</strong></p>
                            </li>
                            {/* data-aos="fade-up" */}
                            
                            {/* data-aos="fade-up-left" */}
                            <li data-aos="fade-up-left" >
                                <Link to = "/marketPlace">
                                    <img src={secondIcon} alt="market Icon" width="116" height="116" ></img>
                                </Link>
                                <p><strong>{content.secIcon}</strong> </p>
                            </li>
                        </ul>
                    </section>
                    {/* data-aos="fade-down" */}
                    <section data-aos="fade-down" id="how-it-works" className="grow">
                        <h2 className="section__title grow__title">{content.caag}</h2>
                        <p>
                        {content.caagc}
                        </p>
                        {/* <svg width="174" height="341" viewBox="0 0 174 341" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <use xlinkHref={`#grow-illustration`}></use>
                        </svg> */}
                        <img src={about_draw} alt="Cotton At a glance" width="274" height="341"  ></img>
                        <svg width="898" height="500" viewBox="0 0 898 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="blob">
                        <use xlinkHref={`#grow-blob`}></use>
                        </svg>
                    </section>
                    {/* data-aos="fade-right" */}
                    <div data-aos="fade-right" className="arrow-1"></div>
                    {/* data-aos="fade-down" */}
                    <section data-aos="fade-down" className="get-feedback">
                        <h2 className="section__title get-feedback__title">
                        {content.avi}
                        </h2>
                        <p>
                        {content.avic}<br/>
                             
                            <Link to='/marketPlace' className="button">{content.avil}</Link>   
                                
                        </p>
                        <img src={market_draw}  alt="catton: a Volatile Market" width="519" height="366" ></img>
                    </section>
                    {/* data-aos="fade-left" */}
                    <div data-aos="fade-left" className="arrow-2"></div>
                    {/* data-aos="fade-down" */}
                    <section data-aos="fade-down" className="learning">
                    
                        <h2 className="section__title learning__title">
                            {content.wwoc}
                        </h2>
                        <p>
                        {content.wwocc}
                            <br/>{state.isAuth ? 
                                <Link to='/prediction' className="button">{content.wwocl}</Link>   
                                :
                                <Link to='/login' className="button">{content.wwocl}</Link>
                            }
                        </p>
                        <img src={graph_draw} width="698" height="366" alt="Predict Now" style={{paddingLeft:50}} ></img>
                        
                    </section>
                    <ContactUs />
                    
                </main>
            
                <Footer/>

                <svg aria-hidden="true" focusable="false" style={{display: 'none'}}>
                    
                    <symbol id="grow-illustration" viewBox="0 0 174 341" aria-hidden="true">
                        <path d="M83.596 8.873C37.427 8.873 0 33.723 0 64.378c0 13.688 7.466 26.216 19.836 35.893v40.285l26.5-26.482a118.96 118.96 0 0037.26 5.809c46.168 0 83.595-24.85 83.595-55.505S129.764 8.873 83.596 8.873z" fill="#F2F2F2" />
                        <path d="M89.504 1C43.336 1 5.91 25.85 5.91 56.505c0 13.688 7.466 26.216 19.836 35.893v40.285l26.5-26.482a118.96 118.96 0 0037.26 5.809c46.168 0 83.595-24.85 83.595-55.505S135.673 1 89.504 1z" stroke="#3F3D56" strokeMiterlimit="10" />
                        <path d="M53.182 144.622s-1.682-22.63-.89-26.769c.791-4.139 1.535-15.921-2.818-12.048-4.353 3.873-2.806 12.66-2.806 12.66s-4.131 23.917-.31 27.162c3.82 3.245 6.824-1.005 6.824-1.005z" fill="#A0616A" />
                        <path d="M56.317 167.002S43.36 155.454 44.06 145.655c0 0 7.704-5.949 9.455-2.799 1.751 3.149 14.478 15.436 12.317 19.616-2.161 4.18-9.515 4.53-9.515 4.53z" fill="#F1C6DE" />
                        <path d="M102.19 146.355s7.704-21.347 8.055-25.547c.35-4.199 2.801-15.747 5.953-10.848 3.151 4.899-.701 12.948-.701 12.948s-2.451 24.147-7.003 26.247c-4.553 2.099-6.304-2.8-6.304-2.8zM81.18 253.44h20.66l1.051 10.499-4.903 1.05s-11.556-3.5-18.209-2.45c-6.653 1.05 1.4-9.099 1.4-9.099z" fill="#A0616A" />
                        <path d="M94.837 252.041s9.805-6.649 11.556-1.05c1.751 5.599 8.054 25.896 5.953 27.996-2.101 2.1-4.553-1.75-4.553-1.75s-4.202-8.748-7.353-9.098c-3.152-.35-4.903-3.15-4.903-3.15s9.105-6.999-.7-12.948z" fill="#2F2E41" />
                        <path d="M75.927 306.283s3.852 15.748 3.151 18.198c-.7 2.45 11.206 1.05 11.206 1.05l.7-4.55s-7.003-11.198-7.003-16.097c0-4.9-8.054 1.399-8.054 1.399z" fill="#A0616A" />
                        <path d="M90.284 317.832s9.455 6.999 4.553 10.498c-4.903 3.5-23.112 12.599-23.112 12.599s-6.654 1.049-1.751-4.9c4.902-5.949 6.303-6.999 6.653-10.148a15.366 15.366 0 012.16-5.909s4.844 9.758 11.497-2.14zM61.57 233.843s-3.852 36.395 2.1 47.944c5.954 11.548 12.957 27.296 12.607 27.996-.35.7 10.155-1.05 10.155-4.2 0-3.149-11.556-34.645-11.556-34.645s4.903-40.944 8.755-43.744c3.852-2.8-22.062 6.649-22.062 6.649z" fill="#2F2E41" />
                        <path opacity=".1" d="M61.57 233.843s-3.852 36.395 2.1 47.944c5.954 11.548 12.957 27.296 12.607 27.996-.35.7 10.155-1.05 10.155-4.2 0-3.149-11.556-34.645-11.556-34.645s4.903-40.944 8.755-43.744c3.852-2.8-22.062 6.649-22.062 6.649z" fill="#000" />
                        <path d="M69.484 131.132c-2.503.453-4.983 1.827-6.227 4.174-1.162 2.19-1.236 5.116-3.083 6.688-1.103.939-2.6 1.156-3.831 1.893a5.894 5.894 0 00-2.714 5.252c.098 1.931 1.117 3.73 1.096 5.663-.028 2.514-1.768 4.589-3.404 6.408l5.426 1.006c.82.219 1.68.242 2.51.067.937-.277 1.698-1.048 2.645-1.283 1.358-.338 2.702.488 3.914 1.221 3.45 2.085 7.15 3.659 10.835 5.226 1.085.461 2.314.923 3.384.425.864-.401 1.401-1.34 2.214-1.848 1.456-.91 3.284-.225 4.92.224a16.275 16.275 0 0011.109-.945c-.75-.875-1.732-1.487-2.54-2.301-.807-.815-1.46-1.968-1.247-3.128.218-1.183 1.236-1.972 1.93-2.927a6.87 6.87 0 001.046-5.215 9.515 9.515 0 00-2.498-4.725 24.814 24.814 0 01-2.043-2.153c-1.276-1.722-1.592-4.003-2-6.15-.409-2.147-1.054-4.433-2.71-5.74-2.641-2.083-6.929-1.373-10.015-1.58-2.943-.197-5.78-.252-8.717-.252zM52.115 208.997l6.653 16.447s-30.466 33.246-13.307 37.795c17.16 4.55 23.112-3.499 33.968 2.8 0 0 5.252-8.049 4.552-12.948 0 0-15.058-2.8-23.112-2.45 0 0 21.712-18.898 23.813-19.597 2.1-.7 9.104-11.899-1.751-20.998-10.856-9.098-8.055-13.998-8.055-13.998l-22.761 12.949z" fill="#2F2E41" />
                        <path d="M67.873 151.954s1.05 10.849-3.502 12.249c-4.553 1.399 17.859 1.049 17.859 1.049s-5.253-3.149-2.802-9.798c2.452-6.649-11.555-3.5-11.555-3.5z" fill="#A0616A" />
                        <path opacity=".1" d="M67.873 151.954s1.05 10.849-3.502 12.249c-4.553 1.399 17.859 1.049 17.859 1.049s-5.253-3.149-2.802-9.798c2.452-6.649-11.555-3.5-11.555-3.5z" fill="#000" />
                        <path d="M91.685 170.852s-2.101-10.849-6.303-10.149c-4.203.7-12.607 1.4-13.657 2.1-1.05.7-6.654 2.134-6.654 2.134s2.101-2.484 0-2.834c-2.1-.35-8.754 1.4-9.455 2.8-.7 1.399-3.502 4.199-3.502 9.098 0 4.9-2.1 13.299-1.4 16.798.7 3.5-.35 11.548-2.451 16.098-2.102 4.549-.35 9.099 3.151 4.549 3.502-4.549 1.751 0 4.553.35 2.8.35 15.407-12.598 18.91-9.449 3.501 3.15 7.003 5.25 7.703 3.5.7-1.75-2.801-4.899-2.801-6.299 0-1.4-5.603 4.549.35-7.699 5.953-12.248.35-15.748 11.556-20.997z" fill="#F1C6DE" />
                        <path d="M88.883 170.152l2.802.7s10.155-7.349 12.957-12.599c2.801-5.249 4.902-9.448 4.902-9.448s-4.552-5.599-7.354-3.5c-2.801 2.1-15.407 16.448-15.407 16.448l2.1 8.399z" fill="#F1C6DE" />
                        <path d="M75.927 159.303c5.995 0 10.855-4.857 10.855-10.848 0-5.992-4.86-10.849-10.855-10.849-5.996 0-10.856 4.857-10.856 10.849 0 5.991 4.86 10.848 10.856 10.848z" fill="#A0616A" />
                        <path d="M66.323 145.312a9.538 9.538 0 016.63-2.179c4.162.256 7.825 3.219 11.993 3.312a4.291 4.291 0 01.359-2.655c.323-.662.833-1.304.764-2.037a2.487 2.487 0 00-.899-1.472c-2.41-2.283-5.74-3.459-9.057-3.604-2.224-.097-6.469-.045-8.193 1.638-1.476 1.44-1.305 5.131-1.597 6.997z" fill="#2F2E41" />
                        <path d="M89.504 89.586c12.57 0 22.759-10.183 22.759-22.744 0-12.562-10.189-22.745-22.759-22.745S66.745 54.28 66.745 66.842c0 12.56 10.19 22.744 22.76 22.744z" fill="#ECCE6D" />
                        <path d="M83.943 61.128c1.206 0 2.183-1.279 2.183-2.856 0-1.578-.977-2.857-2.183-2.857s-2.183 1.28-2.183 2.857c0 1.578.977 2.856 2.183 2.856zM95.221 61.128c1.206 0 2.183-1.279 2.183-2.856 0-1.578-.977-2.857-2.183-2.857-1.205 0-2.183 1.28-2.183 2.857 0 1.578.978 2.856 2.183 2.856z" fill="#444053" />
                        <path d="M103.147 67.257c0 4.102-6.855 11.01-13.773 11.01-6.917 0-13.512-7.064-13.512-11.166s6.452-.35 13.37-.35c6.917 0 13.915-3.596 13.915.506z" fill="#3F3D56" />
                        <path d="M78.041 67.958s12.435 2.766 22.881.078c0 0 1.278 0 .405 1.477-.228.383-.56.694-.958.895-2.013 1.029-9.467 4.067-21.385.192a2.343 2.343 0 01-1.547-1.584c-.14-.507-.08-.988.604-1.058z" fill="#F6F8FB" />
                    </symbol>
                    <symbol id="grow-blob" viewBox="0 0 898 500">
                        <path opacity=".1" d="M521.365 82.432c-57.524-1.67-112.319-17.128-164.633-34.047-52.315-16.92-104.148-35.645-160.299-44.61-36.118-5.763-77.413-6.581-106.516 9.543-27.995 15.507-37.049 42.29-41.913 67.131-3.66 18.693-5.81 38.374 4.214 55.871 6.967 12.151 19.327 22.361 27.875 33.999 29.753 40.5 8.724 90.431-23.517 129.968-15.121 18.548-32.658 36.246-44.328 55.99-11.67 19.745-17.056 42.387-6.855 62.508 10.121 19.961 34.232 34.954 60.357 45.501 53.053 21.422 115.577 27.554 176.576 31.021 134.912 7.697 270.555 4.358 405.901 1.027 50.075-1.228 100.327-2.48 149.632-8.925 27.353-3.58 55.597-9.262 75.446-22.979 25.218-17.417 31.463-46.897 14.567-68.736-28.332-36.624-106.684-45.749-126.492-85.022-10.9-21.63.297-45.749 16.14-65.814 33.983-43.037 90.953-80.8 93.955-130.024 2.063-33.79-25.323-67.63-67.669-83.617-44.385-16.759-105.945-14.648-138.684 13.09-33.71 28.606-92.96 39.594-143.757 38.125z" fill="#6C63FF" />
                    </symbol>
                    
                    
                    
                </svg>

            </div>
                        
        </>
    );
    
}

export default Home; 