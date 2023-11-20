import Contacts from '../componets/contacts';
import './Contact.css'
import Helmet from 'react-helmet';
export default function Contact() {
    return (
<div>
<Helmet>
      <title>Contact - Nova Futura</title>
      <meta name="description" content="Adiconar texto"></meta>
      <meta name="keywords" content=""></meta>
    </Helmet>
<header>
                {/* sessa 1*/}
                <div className=" py-4 px-8 sm:px-16 pt-5" >
                    {/* navegador*/}
                    <nav class=" header max-w-6xl mx-auto" >
                        <div class="   ">
                            <div class="   ">
                              
                                <div class=" flex-row h-16 flex items-center justify-between sm:items-stretch sm:justify-between">
                                    <div class=" items-center ">
                                        <img class="h-20 w-auto" src="Logo NF_Positivo1 1.png" alt="logo" />
                                    </div>
                                    <div class="flex-1  items-center justify-center hidden sm:ml-6 sm:block">
                                        <div class="flex h-16 items-center justify-center nav ">
                                        <a href="/" class=" font-bold px-4 py-2 text-xs ">HOME</a>
                                            <a href="/about" class="  font-bold px-4 py-2 text-xs ">ABOUT</a>
                                            <a href="/products" class="  font-bold px-4 py-2 text-xs ">PRODUCTS</a>
                                            <a href="/services" class="  font-bold px-4 py-2 text-xs ">SERVICES</a>
                                            <a href="/contact" class="  font-bold px-4 py-2 text-xs ">CONTACT</a>
                                        </div>
                                    </div>
                                    <div class="flex  items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a href="/contact" class=" text-sm btn-forms text-white py-2 px-8 font-medium" aria-current="page">Get in touch</a>
                                    </div>
                                </div>
                                <div class="flex-1  items-center justify-center sm:hidden block ">
                                <div class="flex h-16 items-center justify-center nav ">
                                        <a href="/" class=" font-bold px-2 py-2 text-xs ">HOME</a>
                                            <a href="/about" class="  font-bold px-2 py-2 text-xs ">ABOUT</a>
                                            <a href="/products" class="  font-bold px-2 py-2 text-xs ">PRODUCTS</a>
                                            <a href="/services" class="  font-bold px-2 py-2 text-xs ">SERVICES</a>
                                            <a href="/contact" class="  font-bold px-2 py-2 text-xs ">CONTACT</a>
                                        </div>
                                        </div>
                            </div>
                        </div>

                    </nav>

                  

                 
                </div>

            </header>
   {/* sessa 8 -  */}
   <div className="ss8-C">
          <div className="max-w-6xl mx-auto py-2 sm:py-24 flex flex-col sm:flex-row  justify-center items-center px-8 sm:px-0  ">
      

         <div className="flex justify-center sm:my-16 my-8 basis-6/12  ">
<div className="  sm:px-12 px-2 ss3">
<Contacts/>
</div>
         </div>
         <div className="flex  justify-center  basis-6/12 ">
         <div className="flex flex-col   ">
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="2.png" alt="logo" />
               </div>
               <div>
                  <p>@novafuturainvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="1.png" alt="logo" />
               </div>
               <div>
                  <p>/novafuturainvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="4.png" alt="logo" />
               </div>
               <div>
                  <p>Nova Futura Investimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center   mb-9'>
               <div>
               <img class="h-auto w-auto   pr-4 " src="face.png" alt="logo" />
               </div>
               <div>
                  <p>@/novafuturanewf</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="3.png" alt="logo" />
               </div>
               <div>
                  <p>nfinvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="6.png" alt="logo" />
               </div>
               <div>
                  <p>@/novafutura</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-9'>
               <div>
               <img class="h-auto w-auto pr-4" src="5.png" alt="logo" />
               </div>
               <div>
                  <p>/nova_futura</p>
                  </div>
            </div>

         </div>
       </div>
       
         
       </div>
          </div>
          <div className='flex flex flex-col sm:flex-row  justify-center items-center px-8 sm:px-0  justify-center'>
          <div className="flex flex-col items-center justify-center my-16 basis-1/3 ">
<h3 className=' pb-4'>
André Schierz
</h3>
<p className=' pc'>
Global Business Development VP  
</p>
<p className='font-bold pc'>
phil.joslin@novafutura.com.br 
</p>

         </div>
         <div className="flex flex-col items-center justify-center my-16 basis-1/3 ">
         <h3 className=' pb-4'>
         Phil Joslin
</h3>
<p className=' pc'>
Senior Asia Business Development
</p>
<p className='font-bold pc'>
andre.schierz@novafutura.com.br
</p>
         </div>

       </div>
<div className='ss3'>
   <br/>
   <br/>
</div>
       </div>

)
}