import React from 'react';

import { Outlet } from 'react-router-dom';
export default function App() {
    return (
        <div>
      
            <Outlet />
            <footer className='bg-gray-50 '>
                <div className='flex flex-col sm:flex-row max-w-6xl justify-center  mx-auto py-16 px-8 sm:px-0 '>
                    <div className='flex flex-col basis-2/5 mr-12'>
                        <img class=" mr-44 sm:mr-64" src="Logo NF_Positivo1 1.png" alt="logo" />

                        <p className='py-3 sm:py-6 p sm:ml-5 text-sm font-semibold'>
                            We simplify investments with efficient services and 
                            platforms. We have a complete portfolio of financial 
                            products to meet our diverse customer’s profiles.
                        </p>
                        <div className='flex flex-row py-6 sm:ml-5'>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                               <a href="https://www.instagram.com/novafuturainvestimentos/"> 
                               <img src="Link.png" alt="" />
                               </a>
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                                <a href='https://www.youtube.com/c/novafuturainvestimentos'>
                                    <img src="Link-1.png" alt="" />
                                    </a>
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                            <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGSNfMTPB8tEgAAAYr11_bw3LcvV486-t4fajtUxuKfDFEFDBspHkXnaMEKHvGrYaPYb6x_Qdcvw9gfSK2KX9CvPGRmAiFG58zLexfTon1kYD3RWax-1gYE7Nm9YPb_LGC_IWU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fnova-futura-investimentos%2F'>
                                <img src="Link-2.png" alt="" />
                                </a>  
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                            <a href='https://www.facebook.com/novafuturanewf/'>
                            
                                <img src="Link-3.png" alt="" />
                                </a> 
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                            <a href='https://twitter.com/nfinvestimentos'>
                                <img src="Link-4.png" alt="" />
                                </a> 
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                            <a href='https://www.twitch.tv/novafutura'>
                                <img src="Link-5.png" alt="" />
                                </a> 
                            </div>
                            <div className='sm:mr-5 mr-2  rounded-md'>
                            <a href='https://www.tiktok.com/@nova_futura'>
                                <img src="Link-6.png" alt="" />
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col basis-1/5 '>
                        <h5 className='uppercase font-semibold tracking-widest mt-5 sm:mt-0 sm:mb-0 mb-4 pb-5'>
                            SiteMap
                        </h5>
                        <ul className='navf flex sm:flex-col flex-row flex-wrap'>
                            <li className=' sm:mt-5 mb-5 mr-10 font-semibold '>
                                <a href="/">Home</a>
                            </li>
                            <li className='mb-5 mr-10 font-semibold'>
                                <a href="/About">About</a>
                            </li>
                            <li className='mb-5 mr-10 font-semibold'>
                                <a href="/Products">Products</a>
                            </li>
                            <li className='mb-5 mr-10 font-semibold'>
                                <a href="/Services">Services</a>
                            </li>
                            <li className='mb-5 mr-10 font-semibold'>
                                <a href="/Contact">Contact</a>
                            </li>
                            <li className='mb-5 mr-10 font-semibold'>
                                <a href="PrivacyPolicy.pdf">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col basis-1/5 mr-6 mt-5 sm:mt-0'>
                        <h5 className='uppercase font-semibold tracking-widest pb-5'>
                            Certifications
                        </h5>
                        <div className='flex flex-row items-center'>
                            <img className='p-2 h-auto w-auto' src="cert3.png" alt="" />
                            <img className='p-2 h-12 w-24' src="cert4.png" alt="" />
                        </div>
                        <div className='flex flex-row items-center'>
                            <img className='p-2 h-auto w-auto' src="cert1.png" alt="" />
                            <img className='p-2 h-16 w-26' src="cert2.png" alt="" />
                        </div>


                    </div>
                    <div className='flex flex-col basis-1/5 mr-6 mt-5 sm:mt-0'>
                        <h5 className='uppercase font-semibold tracking-widest pb-5'>
                            Contact
                        </h5>
                        <h3 className='text-left font-normal h3'>
                            0800 724 3080
                        </h3>
                    </div>
                </div>
                <div className='ss3 py-4'>
                    <h5 className='text-white text-center font-normal sm:text-md text-sm'>
                    NOVA FUTURA CORRETORA DE TÍTULOS E VALORES LTDA.<br/>
Al. Santos, 960 – 10th floor – 01418-002 – São Paulo – SP<br/>
CNPJ: 04.257.795/0001-79
                    </h5>
                </div>
            </footer>
        </div>
    );
}