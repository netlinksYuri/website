import React from 'react';

import { Outlet } from 'react-router-dom';
export default function App() {
    return (
        <div>
            <header>
                {/* sessa 1*/}
                <div className=" ss1 pt-5 pb-" >
                    {/* navegador*/}
                    <nav class="header max-w-6xl mx-auto" >
                        <div class="   ">
                            <div class="   ">
                                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <img class="h-8 w-auto" src="Logo NF_Positivo1 1.png" alt="logo" />

                                </div>
                                <div class=" flex-row h-16 flex items-center sm:items-stretch sm:justify-start">
                                    <div class=" flex basis-1/4 items-center ">
                                        <img class="h-16 w-auto" src="Logo NF_Positivo1 1.png" alt="logo" />
                                    </div>
                                    <div class="flex-1 basis-1/4 items-center justify-center hidden sm:ml-6 sm:block">
                                        <div class="flex h-16 items-center justify-center nav ">
                                            <a href="/" class=" font-medium px-3 py-2 text-sm font-medium">HOME</a>
                                            <a href="/About" class="font-medium  px-3 py-2 text-sm font-medium">ABOUT</a>
                                            <a href="/Products" class="font-medium  px-3 py-2 text-sm font-medium">PRODUCTS</a>
                                            <a href="/Services" class="font-medium  px-3 py-2 text-sm font-medium">SERVICES</a>
                                            <a href="/Contact" class="font-medium  px-3 py-2 text-sm font-medium">CONTACT</a>
                                        </div>
                                    </div>
                                    <div class="flex basis-1/4 items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a href="#" class="btn-forms text-white py-2 px-4 font-medium" aria-current="page">Get in touch</a>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="sm:hidden" id="mobile-menu">
                            <div class="space-y-1 px-2 pb-3 pt-2">

                                <a href="#" class="bg-gray-900 text-white block  px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
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
        </div>
    );
}