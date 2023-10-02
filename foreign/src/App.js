import React from 'react';

import { Outlet } from 'react-router-dom';
export default function App() {
    return (
        <div>
            <header>
                {/* sessa 1*/}
                <div className=" ss1 pt-5 pb-" >
                    {/* navegador*/}
                    <nav class=" header max-w-6xl mx-auto" >
                        <div class="   ">
                            <div class="   ">
                              
                                <div class=" flex-row h-16 flex items-center sm:items-stretch sm:justify-start">
                                    <div class=" items-center ">
                                        <img class="h-16 w-auto" src="Logo NF_Positivo1 1.png" alt="logo" />
                                    </div>
                                    <div class="flex-1  items-center justify-center hidden sm:ml-6 sm:block">
                                        <div class="flex h-16 items-center justify-center nav ">
                                            <a href="/" class=" font-medium px-8 py-2 text-sm font-medium">HOME</a>
                                            <a href="/About" class="font-medium  px-8 py-2 text-sm font-medium">ABOUT</a>
                                            <a href="/Products" class="font-medium  px-8 py-2 text-sm font-medium">PRODUCTS</a>
                                            <a href="/Services" class="font-medium  px-8 py-2 text-sm font-medium">SERVICES</a>
                                            <a href="/Contact" class="font-medium  px-8 py-2 text-sm font-medium">CONTACT</a>
                                        </div>
                                    </div>
                                    <div class="flex  items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a href="#" class="btn-forms text-white py-2 px-4 font-medium" aria-current="page">Get in touch</a>
                                    </div>
                                </div>

                            </div>
                        </div>


                        
                    </nav>

                    {/* sessao 1 - Conteudo*/}

                    <div class=" max-w-6xl mx-auto pt-24">
                        <h1 className="font-normal text-left">
                            Outstanding,<br />
                            trustworthy<br />
                            and secure
                        </h1>
                        <h5 className="border-l-2 card pl-5 mt-5 font-normal capaapp ">
                            We are a solid broker and investment manager with<br />
                            <span className="font-semibold">40 years of tradition.</span> <br />
                            Throughout our history, we have been prominent in <br />
                            equity and derivativemarkets.
                        </h5>

                        <img className="max-w-2xl mt-12" src="s1-svgs.png" alt="diferenciais" />
                    </div>
                </div>

            </header>
            <Outlet />
            <footer className='bg-gray-50 '>
                <div className='flex flex-row max-w-6xl justify-center  mx-auto py-16 '>
                    <div className='flex flex-col basis-2/5 mr-12'>
                        <img class="mr-72" src="Logo NF_Positivo1 1.png" alt="logo" />

                        <p className='py-6 ml-5 p font-normal'>
                            We simplify investments with efficient services and<br />
                            platforms. We have a complete portfolio of financial<br />
                            products to meet our diverse customer’s profiles.
                        </p>
                        <div className='flex flex-row py-6 ml-5'>
                            <div className='mr-5  rounded-md'>
                                <img src="Link.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-1.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-2.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-3.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-4.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-5.png" alt="" />
                            </div>
                            <div className='mr-5  rounded-md'>
                                <img src="Link-6.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col basis-1/5 '>
                        <h5 className='uppercase font-normal tracking-widest'>
                            SiteMap
                        </h5>
                        <ul className='navf'>
                            <li className=' mt-5 mb-8 font-semibold'>
                                <a href="/">Home</a>
                            </li>
                            <li className='mb-8 font-semibold'>
                                <a href="/About">About</a>
                            </li>
                            <li className='mb-8 font-semibold'>
                                <a href="/Products">Products</a>
                            </li>
                            <li className='mb-8 font-semibold'>
                                <a href="/Services">Services</a>
                            </li>
                            <li className='mb-8 font-semibold'>
                                <a href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col basis-1/5 mr-6'>
                        <h5 className='uppercase font-normal tracking-widest'>
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
                    <div className='flex flex-col basis-1/5 mr-6'>
                        <h5 className='uppercase font-normal tracking-widest'>
                            Certifications
                        </h5>
                        <h3 className='text-left font-medium'>
                            0800 724 3080
                        </h3>
                    </div>
                </div>
                <div className='ss3 py-4'>
                    <h5 className='text-white text-center font-normal text-md'>
                    NOVA FUTURA CORRETORA DE TÍTULOS E VALORES LTDA.<br/>
Al. Santos, 960 – 10th floor – 01418-002 – São Paulo – SP<br/>
CNPJ: 04.257.795/0001-79
                    </h5>
                </div>
            </footer>
        </div>
    );
}