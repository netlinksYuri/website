import Contacts from '../componets/contacts';
import './Contact.css'

export default function Contact() {
    return (
<div>

   {/* sessa 8 -  */}
   <div className="ss8-C">
          <div className="max-w-6xl mx-auto py-2 sm:py-24 flex flex-col sm:flex-row  justify-center items-center px-8 sm:px-0  ">
      

         <div className="flex justify-center sm:my-16 my-8 basis-6/12  ">
<div className=" sm:py-8 py-2 sm:px-12 px-2 ss3">
<Contacts/>
</div>
         </div>
         <div className="flex  justify-center my-16 basis-6/12 ">
         <div className="flex flex-col   ">
            <div className='flex flex-row text-white items-center mb-5'>
               <div>
               <img class="h-auto w-auto pr-4" src="2.png" alt="logo" />
               </div>
               <div>
                  <p>@novafuturainvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-5'>
               <div>
               <img class="h-auto w-auto pr-4" src="1.png" alt="logo" />
               </div>
               <div>
                  <p>/novafuturainvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-5'>
               <div>
               <img class="h-auto w-auto pr-4" src="4.png" alt="logo" />
               </div>
               <div>
                  <p>Nova Futura Investimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center   mb-5'>
               <div>
               <img class="h-auto w-auto   pr-4 " src="7.png" alt="logo" />
               </div>
               <div>
                  <p>@/novafuturanewf</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-5'>
               <div>
               <img class="h-auto w-auto pr-4" src="3.png" alt="logo" />
               </div>
               <div>
                  <p>nfinvestimentos</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-5'>
               <div>
               <img class="h-auto w-auto pr-4" src="6.png" alt="logo" />
               </div>
               <div>
                  <p>@/novafutura</p>
                  </div>
            </div>
            <div className='flex flex-row text-white items-center mb-5'>
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