import React, { useEffect, useRef } from 'react';
import styles from '@/styles/eevee.module.css';

const Animation = () => {
    const headRef = useRef(null);
    const earLeftRef = useRef(null);
    const earRightRef = useRef(null);
    const innerEarLeftRef = useRef(null);
    const innerEarRightRef = useRef(null);
    const faceRef = useRef(null);
    const eyeLeftRef = useRef(null);
    const eyeRightRef = useRef(null);
    const eyelashLeftRef = useRef(null);
    const eyelashRightRef = useRef(null);
    const fullEyeLeftRef = useRef(null);
    const fullEyeRightRef = useRef(null);
    const blackEyeLeftRef = useRef(null);
    const blackEyeRightRef = useRef(null);
    const whiteEyeLeftRef = useRef(null);
    const whiteEyeRightRef = useRef(null);
    const noseRef = useRef(null);
    const mouthRef = useRef(null);
    const tongueRef = useRef(null);
    const mainBodyRef = useRef(null);
    const legFrontLeftRef = useRef(null);
    const legFrontRightRef = useRef(null);
    const legBackLeftRef = useRef(null);
    const legBackRightRef = useRef(null);
    const maneRef = useRef(null);
    const tailRef = useRef(null);
    const tailTrunkRef = useRef(null);
    const tailTipRef = useRef(null);
    // useEffect(() => {
    //     const sokemon =
    //     {
    //         name: ['Eevee', 'イブイ'],
    //         level: 1,
    //         body:
    //         {
    //             elementId: 'all',
    //             element: document.getElementById('eevee'),






    //             head: {
    //                 elementId: 'head',
    //                 element: document.getElementById('head'),
    //                 rotate: function () {
    //                     anime({
    //                         targets: headRef.current,
    //                         loop: true,
    //                         direction: 'alternate',
    //                         duration: 1000, //ms
    //                         easing: 'easeInOutCirc',
    //                         rotate: '+=5', //deg
    //                         delay: 1000,
    //                     });
    //                 }
    //             },
    //             eyes: {
    //                 left: {
    //                     elementId: 'fulleye',
    //                     element: document.getElementsByClassName('fulleye'),
    //                     blink: function () {
    //                         anime({
    //                             targets: fullEyeLeftRef.current,
    //                             autoplay: true,
    //                             loop: true,
    //                             scaleY: [
    //                                 { value: 1, duration: 3000, delay: 0 },
    //                                 { value: 0.1, duration: 100, delay: 0 },
    //                                 { value: 1, duration: 800, delay: 0 },
    //                                 { value: 0.1, duration: 100, delay: 0 },
    //                                 { value: 1, duration: 100, delay: 0 },
    //                                 { value: 0.1, duration: 100, delay: 0 }
    //                             ],
    //                         });
    //                     },


    //                 }
    //             },

    //             leg: {
    //                 frontLeft: {
    //                     elementId: 'frontleft',
    //                     element: document.getElementById('leg-front-left'),
    //                     move: function () {
    //                         anime({
    //                             targets: legFrontLeftRef.current,
    //                             autoplay: true,
    //                             loop: false,
    //                             direction: 'alternate',
    //                             easing: 'easeInOutCubic',
    //                             rotate: [
    //                                 { value: 30, duration: 0, delay: 0 },
    //                                 { value: 60, duration: 500, delay: 0 },
    //                                 { value: 30, duration: 500, delay: 0 }
    //                             ]
    //                         });
    //                     }
    //                 },

    //                 backRight: {
    //                     elementId: 'backright',
    //                     element: document.getElementById('leg-back-right'),
    //                     move: function () {
    //                         anime({
    //                             targets: legBackRightRef.current,
    //                             autoplay: true,
    //                             loop: false,
    //                             direction: 'alternate',
    //                             easing: 'easeInOutCubic',
    //                             rotate: [
    //                                 { value: 30, duration: 0, delay: 0 },
    //                                 { value: 0, duration: 500, delay: 0 },
    //                                 { value: 30, duration: 500, delay: 0 }
    //                             ]
    //                         });
    //                     }
    //                 }
    //             },

    //             tail: {
    //                 elementId: 'tail',
    //                 element: document.getElementById('tail'),
    //                 rotate: function () {
    //                     anime({
    //                         targets: tailRef.current,
    //                         autoplay: true,
    //                         loop: true,
    //                         direction: 'alternate',
    //                         duration: 2000,
    //                         delay: 4000,
    //                         rotate: '500',
    //                         easing: 'easeInOutCubic'
    //                     });
    //                 }
    //             }
    //         },


    //     };
    // }, []);

    return (
        <div className={styles.animationcontainer}>
            <div className={styles.head} ref={headRef}>
                <div id="ear-left" className="ear" ref={earLeftRef}>
                    <div className="innerear" ref={innerEarLeftRef}></div>
                </div>
                <div id="ear-right" className="ear" ref={earRightRef}>
                    <div className="innerear" ref={innerEarRightRef}></div>
                </div>
                <div className={styles.face} ref={faceRef}>
                    <div id="eye-left" className="eye" ref={eyeLeftRef}>
                        <div id="eyelash-left" className="eyelash" ref={eyelashLeftRef}></div>
                        <div className="fulleye" ref={fullEyeLeftRef}>
                            <div className="blackeye" ref={blackEyeLeftRef}>
                                <div className="whiteeye" ref={whiteEyeLeftRef}></div>
                            </div>
                        </div>
                    </div>
                    <div id="eye-right" className="eye" ref={eyeRightRef}>
                        <div id="eyelash-right" className="eyelash" ref={eyelashRightRef}></div>
                        <div className="fulleye" ref={fullEyeRightRef}>
                            <div className="blackeye" ref={blackEyeRightRef}>
                                <div className="whiteeye" ref={whiteEyeRightRef}></div>
                            </div>
                        </div>
                    </div>
                    <div id="nose" ref={noseRef}></div>
                    <div id="mouth" ref={mouthRef}>
                        <div id="tongue" ref={tongueRef}></div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.mainbody} ref={mainBodyRef}></div>
                <div id="leg-front-left" className="leg" ref={legFrontLeftRef}></div>
                <div id="leg-front-right" className="leg" ref={legFrontRightRef}></div>
                <div id="leg-back-left" className="leg" ref={legBackLeftRef}></div>
                <div id="leg-back-right" className="leg" ref={legBackRightRef}></div>
                <div className={styles.mane} ref={maneRef}></div>
            </div>
            <div id="tail" ref={tailRef}>
                <div id="tail-trunk" ref={tailTrunkRef}></div>
                <div id="tail-tip" ref={tailTipRef}></div>
            </div>
        </div>
    );
};

export default Animation;