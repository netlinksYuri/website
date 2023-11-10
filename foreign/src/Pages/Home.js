import Forms from "../componets/forms"
import Contacts from '../componets/contacts';
import './Home.css'
import Helmet from 'react-helmet';
export default function Home() {
  return (

    <div>
            <Helmet>
      <title>Foreign - Nova Futura</title>
      <meta name="description" content="Adiconar texto"></meta>
      <meta name="keywords" content=""></meta>
    </Helmet>
     {/* sessão 1*/}
           <header>
                <div className=" ss1 px-8 sm:px-16 pt-5" >
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
                                        <a href="/inr" class=" font-bold px-4 py-2 text-xs ">HOME</a>
                                            <a href="/inr/about" class="  font-bold px-4 py-2 text-xs ">ABOUT</a>
                                            <a href="/inr/products" class="  font-bold px-4 py-2 text-xs ">PRODUCTS</a>
                                            <a href="/inr/services" class="  font-bold px-4 py-2 text-xs ">SERVICES</a>
                                            <a href="/inr/contact" class="  font-bold px-4 py-2 text-xs ">CONTACT</a>
                                        </div>
                                    </div>
                                    <div class="flex  items-center justify-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a href="/#forms" class=" text-xs btn-forms text-white py-2 px-6 font-medium" aria-current="page">Get in touch</a>
                                    </div>
                                </div>
                                <div class="flex-1  items-center justify-center sm:hidden block ">
                                        <div class="flex h-16 items-center justify-center nav ">
                                        <a href="/inr" class=" font-bold px-4 py-2 text-xs ">HOME</a>
                                            <a href="/inr/about" class="  font-bold px-4 py-2 text-xs ">ABOUT</a>
                                            <a href="/inr/products" class="  font-bold px-4 py-2 text-xs ">PRODUCTS</a>
                                            <a href="/inr/services" class="  font-bold px-4 py-2 text-xs ">SERVICES</a>
                                            <a href="/inr/contact" class="  font-bold px-4 py-2 text-xs ">CONTACT</a>
                                        </div>
                                        </div>
                            </div>
                        </div>


                        
                    </nav>

                    {/* sessao 1 - Conteudo*/}

                    <div class=" max-w-6xl mx-auto sm:pt-24 pt-12 ">
                        <h1 className="font-normal text-left">
                            Outstanding,<br />
                            trustworthy<br />
                            and secure
                        </h1>
                        <h5 className="border-l-2 card pl-5 mt-5 font-normal capaapp ">
                            We are a solid broker and investment manager with <br className='sm:block hidden' />
                            <span className="font-semibold">40 years of tradition. </span> <br className='sm:block hidden' />
                            Throughout our history, we have been prominent in <br className='sm:block hidden' />
                            equity and derivative markets.
                        </h5>

                        <img className=" sm:mt-12 mt-6 hidden  sm:block img svg" src="icons.png" alt="diferenciais" />
                        <img className="max-w-2xl sm:mt-12 mt-12 sm:hidden block" src="ss1.png" alt="diferenciais" />
                    
                    </div>
                </div>

            </header>

      {/* sessao 2 - Get In Touch */}
      <div className="ss2 max-w-6xl mx-auto py-16 px-8 sm:px-0">
        <h5 className="  font-semibold mt-5">
          WHERE TO FIND US
        </h5>
        <h2 className=" font-light h2 ">
          Get In Touch
        </h2>
        <div className="flex flex-col sm:flex-row justify-center max-w-4xl mx-auto sm:p-24 ">

          <div className=" flex flex-col sm:basis-1/2 basis-2/2 border-solid border-2 justify- items-center p-3 card mx-8 my-4 sm:mx-2">
            <img class="h-auto w-auto" src="sp.png" alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold h3g">
                SÃO PAULO - SP
              </h3>
              <p className="py-2 font-semibold cardss2 ">
                Al Santos, 960 <br />
                10th floor - Postal Code 01418-002 <br />
                Phone: (11) 4020-6710
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-1/2  justify-center sm:pl-5 pl-0 my-4 ">
            <p className=" textss2 font-normal sm:mt-10  my-3 sm:text-left text-center ">
              <span className="font-bold over text-center  ">+over 24 </span>
              <br className="sm:block hidden"  />
              authorized <br className="sm:block hidden" />locals offices <br className="sm:block hidden" />in Brazil
            </p>
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-around max-w-4xl sm:max-w-6xl mx-auto">
          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img class="h-auto w-auto" src="pr.png" alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">
                MARINGÁ - PR
              </h3>
              <p className="py-2 font-semibold cardss2">
                Av. Pedro Taques, 294 <br />
                 5th floor - Room 503<br />
                Postal Code 87030-000<br />
                Phone: (44) 330415615
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img class="h-auto w-auto" src="rj.png" alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">
                RIO DE JANEIRO - RJ
              </h3>
              <p className="py-2 font-semibold cardss2">
                R. Sete de Setembro, 92 <br />
                Room 1609 and 1610<br />
                Postal Code 20050-002<br />
                Phone: (21) 25406661
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2  items-center p-3 card2 sm:mx-6 mx-8 mb-8">
            <img class="h-auto w-auto" src="ce.png" alt="logo" />
            <div className="text-center">
              <h3 className="py-4 font-semibold">
                FORTALEZA - CE
              </h3>
              <p className="py-2 font-semibold cardss2">
                Av. Des. Moreira, 2120 - 1808<br />
                Postal Code 60170-0020<br />
                Phone: (85) 4042-0967
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sessao 3 - Products*/}
      <div className="ss3  py-16">
        <div className=" max-w-6xl sm:max-md sm:mx-auto  ">
        <h5 className="h5p font-semibold pl-8 sm:pl-0">
        OUR PRODUCTS
            </h5>
          <h2 className=" font-light text-gray-50 py-8 pl-8 sm:pl-0 ">
            Products
          </h2>
          <div className=" flex flex-col sm:flex-row justify-between ">
            <div className=" flex-col basis-1/4 px-8 sm:pl-0    ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Equities
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left ">
                <ul className=" flex flex-col  justify-center align-middle font-semibold  text-gray-50 text-xs ">
                
                  <li className=" font-semibold  text-gray-50  py-2 ">• Cash Equities</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• Single Stock futures</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• ETFs</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• Equity and Index</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• Stock lending</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• BDRs</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• Options</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">• Digital Options</li>
                  
                </ul>
              </div>
            </div>
            <div className=" flex flex-col  basis-1/4 px-8 sm:pl-0 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Futures
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <li className=" font-semibold  text-gray-50  py-3 ">• Commodities: Beef cattle, Coffee,
                    Soybeans, Corn, Ethanol, and Gold</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• US Dollar and Mini Dollar</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• Ibovespa and Mini Ibovespa</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• FX Futures</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• Equity Indexes Futures</li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-1/4 px-8 sm:pl-0 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Fixed income
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 py-2 text-sm">
                    Products
                  </h4>
                  <li className=" font-semibold  text-gray-50  py-1 ">• CDB (Certificate of Bank Deposit);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• LC (Credit Letter);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• LCI (Real Estate Credit Bills);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• LCA (Agribusiness Credit Bills);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• CRI (Real Estate Receivables Certificate);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• CRA (Agribusiness Receivables Certificate);</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• Corporate Bonds;</li>
                  <li className=" font-semibold  text-gray-50  py-1 ">• Government Bonds.</li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-1/4 px-8 sm:pl-0  ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                <br />
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 py-2 text-sm">
                    Hightlights
                  </h4>
                  <li className=" font-semibold  text-gray-50  py-3 ">• Best rates in the market;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• Possibility of secondary market trading;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• Team focused on seeking opportunities;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• More than 500 products available</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">• CETIP Certification</li>
                 
                </ul>
              </div>
            </div>

          </div>
          <h3 className="pt-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left mb-5">
            Execution Services
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between sm:items-center   text-center">

            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 sm:px-0 mb-5 sm:mr-4 mr-0 text-gray-50">
              Direct Market Access (DMA)
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5 sm:px-0 sm:mr-4 mr-0  text-gray-50">
              Colocation services
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5 sm:px-0 sm:mr-4 mr-0  text-gray-50">
              Integration services
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/4 bnt-p py-3 px-4 mb-5   text-gray-50">
              Voice/Chat Execution
            </div>
          </div>
          <h3 className="pt-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left  my-5">
            Customers We Serve
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between items-center  text-center">

            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-1.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-2.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-3.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-4.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-5.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/2 sm:basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-6.png" alt="logo" />
            </div>
          </div>
          <h3 className="t-8 px-8 sm:pl-0 font-normal  text-gray-50  text-left  my-5">
          Highlights
          </h3>
          <div className=" flex flex-col sm:flex-row  justify-between sm:items-center sm:mx-0 text-center">

            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
            Leverage
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
            Competitive cost structure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
            Robust Infrastructure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5 sm:mr-4 text-xs  text-gray-50">
            Strong back-office and Clearing
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 px-1 mb-5  text-xs  text-gray-50">
            Post Trade services
            </div>
          </div>
        </div>
      </div>

      {/* sessao 4 - Banner */}
      <div className="ss4 py-24">
        <div className="flex flex-col sm:flex-row  justify-center py-8 px-8 sm:px-0  max-w-6xl mx-auto ">

          <div className=" flex basis-7/12  items-center p-3 card">
            <div className="text-left">
              <h2 className="pt-2 font-light  text-gray-50 ">
                Nova Futura is more <br className="sm:block hidden " />
                 than access to the <br className="sm:block hidden "  />
                local market.
              </h2>
              <div className="mt-4 flex">
                <a href="/#forms" class="btn-forms mt-4 py-2 px-5 text-gray-50 sm:block hidden " aria-current="page">Get in touch</a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col basis-5/12  justify-center  ">
            <h5 className="border-l-2 cardw pl-5 py-5 ml-4 sm:ml-0 mt-5 font-normal  text-gray-50 ">
              <span className="text-lg font-medium"> Local Investment Funds</span>
              <br />
              <br />
              You can invest using your own Investment strategies, or
              leverage local asset managers expertise.
              <br />
              <br />
              <span className="font-semibold">100+ Asset Managers</span> on our funds distribution list.
              <div className=" flex">
              <a href="/#forms" class="btn-forms mt-4 py-2 px-5 mr-70 sm:mr-0 text-gray-50 text-center sm:hidden block  " aria-current="page">Get in touch</a>
              </div>
            </h5>


          </div>
        </div>
      </div>
      {/* sessa 5 - Services*/}
      <div className="ss5 max-w-6xl mx-auto py-16 px-8 sm:px-0">
        <div className=" justify-between flex flex-col sm:flex-row  justify-center py-8 ">
       
          <div className="">
            <h5 className="font-semibold">
              SERVICES WE OFFER
            </h5>
            <h2 className=" font-light font-normal h2">
              Services
            </h2>
          </div>
          <div className="flex  sm:items-center" >
            <h5 className="text-left h5 sm:pt-8  sm:text-right">
              Detailed Services focused on high performing electronic trading. <br className="sm:block hidden "/>
               Work that <span className="font-bold">matches your expectations!</span>
            </h5>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" flex flex-col basis-1/3 sm:mr-4 ">
            
            <div className=" bg-gray-100 cards py-6 px-8 flex flex-col justify-start ">
              <div class="" >
            <img className="h-8 w-8 mx-auto" src="serv1.png" alt="logo" />
              <h4 className=" font-medium   text-center mb-2  py-4 text-lg">
              Research
              </h4>
              <p className="border-b-2 text-sm font-normal pb-3" >
              Our teams can help you understand the
market and infrastructure to assess your
decision to invest locally and have you set for
trading:
              </p>
              </div>

              <p className=" text-sm font-normal py-3">
              • Historical Market – Data (BackTest)<br/>
• End of Day Market – Data PCAP Files (ns)<br/>
• Daily Closing Prices<br/>
• Collocated server for real time market data<br/>
collection, certification and early prod tests
(quick setup for all environments)<br/>
• Hardware procurement<br/>
• Due Diligence<br/>
• Questionnaire<br/>
• Product details<br/>
• Exchange fees simulation<br/>
• Initial Margin Simulations<br/>
• Exchange Incentives for new customers<br/>
• Market Making Benefits and Programs
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-1/3 sm:mx-4 ">
           
            <div className=" bg-gray-100 cards py-6 px-8 flex flex-col justify-start ">
              <div class="" >
            <img className="h-8 w-8 mx-auto" src="serv2.png" alt="logo" />
              <h4 className=" font-medium   text-center mb-2  py-4 text-lg">
              Execution
              </h4>
              <p className="border-b-2 text-sm font-normal pb-3" >
              Our dedicated team does a proactive, careful
and high-quality real-time monitoring and can
help tailor made the best trading solution for
your needs:
              </p>
              </div>

              <p className=" text-sm font-normal py-3">
              • Order Entry Fine Tuning<br/>
• Latency+MsgsExcess Monitoring<br/>
• Normalized Market Data<br/>
• Colocation Infra Management<br/>
• Global Connectivity<br/>
• Infrastructure as Service
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-1/3 sm:ml-4  ">
          
            <div className=" bg-gray-100 cards py-6 px-8 flex flex-col justify-start ">
              <div class="" >
            <img className="h-8 w-8 mx-auto" src="serv3.png" alt="logo" />
              <h4 className=" font-medium   text-center mb-2  py-4 text-lg">
              Post Trade
              </h4>
              <p className="border-b-2 text-sm font-normal pb-3" >
              Besides all services provided by our efficient
middle and back-office teams, Nova Futura tech
teams can also offer the below electronic post
trade services:
              </p>
              </div>

              <p className=" text-sm font-normal py-3">
              • SFTP File Transfers<br/>
• WebServices<br/>
• Drop Copy FIX 4.4 and 4.2<br/>
• Enriched Drop Copy ( voice+electronic)<br/>
• Reverse Staging to Bloomberg EMSX<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
       {/* sessa 6 - online*/}
       <div className="ss6 max-w-6xl mx-auto py-16  px-8 sm:px-0 ">
        <div className="flex flex-col justify-between">
       
          <div>
            <h5 className="font-semibold">
              SERVICES WE OFFER
            </h5>
            <h2 className=" font-light font-normal h2 ">
            Online experience
            </h2>
          </div>
          {/* sessao 5*/}
          <div className=" py-4">
                <div className="flex flex-col sm:flex-row justify-center  max-w-6xl mx-auto ">

                    <div className=" flex flex-col basis-6/12  items-center p-3 card">
                        <div className="text-left">
                            <img className=" mx-auto" src="phoneProducts.png" alt="logo" />

                        </div>
                    </div>
                    <div className=" flex flex-col basis-6/12  justify-center  ">
                        <h3 className="font-semibold text-left app text-lg ">
                            We provide the best online experience, <br className="sm:block hidden" />
                            enabling the use of a wide range of <br className="sm:block hidden" />
                            platforms to serve all types of investors
                        </h3>
                        <p className="font-normal text-left text-sm mt-4  "><span className="font-bold">All your investments in one place.</span> <br />
                            Download the Nova Futura app to invest<br />
                            with freedom and all the support<br />
                            you may need.</p>
                        <div className="my-12 ">
                            <a href="#" class="btn-forms mt-4 py-3 px-8 text-gray-50" aria-current="page">Download now</a>
                        </div>
                    </div>
                </div>
                </div>
          <h3 className="  font-bold pb-8  ">
          Partner platforms
            </h3>
          <img className=" mx-auto" src="parceiros.png" alt="logo" />

          </div>
          </div>
           {/* sessa 7 -Partner */}
       <div className="ss7 max-w-6xl mx-auto pt-4 pb-36 ">
       <img className=" mx-auto" src="ss7-1.png" alt="logo" />
       </div>
          {/* sessa 8 - Contact*/}
          <div className="ss8" id="forms">
          <div className="max-w-6xl mx-auto py-32 px-8 sm:px-0">
          <div className="flex flex-col justify-between">
       
       <div>
         <h5 className="font-semibold">
         WANT TO KNOW MORE?
         </h5>
         <h2 className=" font-light font-normal h2 ">
         Contact us
         </h2>

         <div className="flex justify-center sm:my-16 my-8 basis-6/12  ">
<div className=" sm:py-8 py-2 sm:px-12 px-2 ">
<Contacts/>
</div>
         </div>
       </div>
       

       </div>
          </div>
       </div>
    </div>
  )
}

