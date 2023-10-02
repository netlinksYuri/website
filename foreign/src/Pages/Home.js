import Forms from "../componets/forms"
import './Home.css'
export default function Home() {
  return (

    <div>
     

      {/* sessao 2 - Get In Touch */}
      <div className="ss2 max-w-6xl mx-auto py-16">
        <h5 className="  font-semibold mt-5">
          WHERE TO FIND US
        </h5>
        <h2 className=" font-light h2 ">
          Get In Touch
        </h2>
        <div className="flex flex-row justify-center  max-w-4xl mx-auto p-24">

          <div className=" flex flex-col basis-1/2 border-solid border-2 justify- items-center p-3 card">
            <img class="h-auto w-auto" src="sp.png" alt="logo" />
            <div className="text-center">
              <h3 className="pt-2 font-semibold">
                SÃO PAULO - SP
              </h3>
              <p className="pt-2 font-semibold cardss2">
                Al Santos, 960 <br />
                10th floor - Postal Code 01418-002 <br />
                Phone: (11) 4020-6710
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-1/2  justify-end pl-5 ">
            <p className=" textss2 font-normal ">
              <span className="font-bold text-9x1 ">+ over 24 </span>
              <br />
              authorized<br />locals offices <br />in Brazil
            </p>
          </div>
        </div>

        <div className=" flex flex-row justify-around">
          <div className=" flex flex-col basis-1/3 border-solid border-2  iitems-center p-3 card2 mx-10">
            <img class="h-auto w-auto" src="pr.png" alt="logo" />
            <div className="text-center">
              <h3 className="pt-2 font-semibold">
                MARINGÁ - PR
              </h3>
              <p className="pt-2 font-semibold cardss2">
                Av. Pedro Tasques, 294 - 5th floor - Room 503<br />
                Postal Code 87030-000<br />
                Phone: (44) 330415615
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2 justify- items-center p-3 card2 mx-10">
            <img class="h-auto w-auto" src="rj.png" alt="logo" />
            <div className="text-center">
              <h3 className="pt-2 font-semibold">
                RIO DE JANEIRO - RJ
              </h3>
              <p className="pt-2 font-semibold cardss2">
                R. Sete de Setembro, 92 <br />
                Room 1609 and 1610<br />
                Postal Code 20050-002<br />
                Phone: (21) 25406661
              </p>
            </div>
          </div>

          <div className=" flex flex-col basis-1/3 border-solid border-2 justify- items-center p-3 card2 mx-10">
            <img class="h-auto w-auto" src="ce.png" alt="logo" />
            <div className="text-center">
              <h3 className="pt-2 font-semibold">
                FORTALEZA - CE
              </h3>
              <p className="pt-2 font-semibold cardss2">
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
        <div className=" max-w-6xl mx-auto ">
          <h2 className=" font-light text-gray-50 py-8 ">
            Products
          </h2>
          <div className=" flex flex-row justify-between ">
            <div className=" flex-col basis-1/5  ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Equities
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left ">
                <ul className=" flex flex-col  justify-center align-middle font-semibold  text-gray-50 text-xs ">
                
                  <li className=" font-semibold  text-gray-50  py-3 ">Cash Equities</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Single Stock futures</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">ETFs</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Equity and Index</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Stock lending</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">BDRs</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Options</li>
                  <li className=" font-semibold  text-gray-50  py-3 "> Digital Options</li>
                  
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-1/5 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Futures
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <li className=" font-semibold  text-gray-50  py-3 ">Commodities: Beef cattle, Coffee,
                    Soybeans, Corn, Ethanol, and Gold</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">US Dollar and Mini Dollar</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Ibovespa and Mini Ibovespa</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">FX Futures</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Equity Indexes Futures</li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-1/5 ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                Fixed income
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 py-2 text-sm">
                    Productcs
                  </h4>
                  <li className=" font-semibold  text-gray-50  py-2 ">CDB (Certificate of Bank Deposit);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">LC (Credit Letter);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">LCI (Real Estate Credit Bills);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">LCA (Agribusiness Credit Bills);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">CRI (Real Estate Receivables Certificate);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">CRA (Agribusiness Receivables Certificate);</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">Corporate Bonds;</li>
                  <li className=" font-semibold  text-gray-50  py-2 ">Government Bonds.</li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col basis-1/5  ">
              <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
                <br />
              </h3>
              <div className="border-solid border-2 card1 py-6 px-8 text-left">
                <ul className=" flex flex-col justify-center align-middle font-semibold  text-gray-50 text-xs ">
                  <h4 className="pt-2 font-medium  text-gray-50  text-center mb-2 border-b-2 py-2 text-sm">
                    Hightlights
                  </h4>
                  <li className=" font-semibold  text-gray-50  py-3 ">Best rates in the market;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Possibility of secondary market trading;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">Team focused on seeking opportunities;</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">More than 500 products available</li>
                  <li className=" font-semibold  text-gray-50  py-3 ">CETIP Certification</li>
                 
                </ul>
              </div>
            </div>

          </div>
          <h3 className="pt-8 font-normal  text-gray-50  text-left mb-5">
            Execution Services
          </h3>
          <div className=" flex flex-row justify-between items-center text-center">

            <div className=" flex flex-col basis-1/5 bnt-p py-3  text-gray-50">
              Direct Market Access (DMA)
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3  text-gray-50">
              Colocation services
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3  text-gray-50">
              Integration services
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3  text-gray-50">
              Voice/Chat Execution
            </div>
          </div>
          <h3 className="pt-8 font-normal  text-gray-50  text-left  my-5">
            Customers We Serve
          </h3>
          <div className=" flex flex-row justify-between items-center text-center">

            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-1.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-2.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-3.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-4.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-5.png" alt="logo" />
            </div>
            <div className=" flex flex-col basis-1/7  py-3  text-gray-50">
              <img class="h-auto w-auto" src="div.e-con-inner-6.png" alt="logo" />
            </div>
          </div>
          <h3 className="pt-8 font-normal  text-gray-50  text-left mb-5">
          Highlights
          </h3>
          <div className=" flex flex-row justify-between items-center text-center">

            <div className=" flex flex-col basis-1/5 bnt-p py-3 mr-4 text-sm  text-gray-50">
            Leverage
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 mr-4 text-sm  text-gray-50">
            Competitive cost structure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 mr-4 text-sm  text-gray-50">
            Robust Infrastructure
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 mr-4 text-sm  text-gray-50">
            Strong back-office and Clearing
            </div>
            <div className=" flex flex-col basis-1/5 bnt-p py-3 mr-4 text-sm  text-gray-50">
            Post Trade services
            </div>
          </div>
        </div>
      </div>

      {/* sessao 4*/}
      <div className="ss4 py-24">
        <div className="flex flex-row justify-center  max-w-6xl mx-auto ">

          <div className=" flex flex-col basis-8/12  items-center p-3 card">
            <div className="text-left">
              <h2 className="pt-2 font-light  text-gray-50 ">
                Nova Futura is more<br />
                than access to the<br />
                local market.
              </h2>
              <div className="mt-12">
                <a href="#" class="btn-forms mt-4 py-2 px-5 text-gray-50" aria-current="page">Get in touch</a>
              </div>
            </div>
          </div>
          <div className=" flex flex-col basis-4/12  justify-center  ">
            <h5 className="border-l-2 cardw pl-5 mt-5 font-normal  text-gray-50 ">
              <span className="text-lg font-medium"> Local Investment Funds</span>
              <br />
              <br />
              You can invest using your own Investment strategies, or
              leverage local asset managers expertise.
              <br />
              <br />
              <span className="font-semibold">100+ Asset Managers</span> on our funds distribution list.
            </h5>


          </div>
        </div>
      </div>
      {/* sessa 5 - Services*/}
      <div className="ss5 max-w-6xl mx-auto py-16">
        <div className="flex flex-row justify-between">
       
          <div>
            <h5 className="font-semibold">
              SERVICES WE OFFER
            </h5>
            <h2 className=" font-light font-normal h2">
              Services
            </h2>
          </div>
          <div className="flex  items-end" >
            <h5 className="  text-right">
              Detailed Services focused on high performing electronic trading.
              <br />
              Work that <span className="font-bold">matches your expectations!</span>
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" flex flex-col basis-1/3 mr-4 ">
            <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
              <br />
            </h3>
            <div className=" bg-gray-100 py-6 px-8 flex flex-col justify-center ">
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
          <div className=" flex flex-col basis-1/3 mx-4 ">
            <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
              <br />
            </h3>
            <div className=" bg-gray-100 py-6 px-8 flex flex-col justify-center ">
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
          <div className=" flex flex-col basis-1/3 ml-4  ">
            <h3 className="pt-2 font-normal  text-gray-50  text-left mb-2">
              <br />
            </h3>
            <div className=" bg-gray-100 py-6 px-8 flex flex-col justify-center ">
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
       <div className="ss6 max-w-6xl mx-auto py-16">
        <div className="flex flex-col justify-between">
       
          <div>
            <h5 className="font-semibold">
              SERVICES WE OFFER
            </h5>
            <h2 className=" font-light font-normal h2 ">
            Online experience
            </h2>
          </div>
          <img className=" mx-auto" src="app.png" alt="logo" />
          <h3 className="  font-bold pb-8  ">
          Partner platforms
            </h3>
          <img className=" mx-auto" src="parceiros.png" alt="logo" />

          </div>
          </div>
           {/* sessa 7 - */}
       <div className="ss7 max-w-6xl mx-auto py-16">
       <img className=" mx-auto" src="ss7.png" alt="logo" />
       </div>
          {/* sessa 8 -  */}
          <div className="ss8">
          <div className="max-w-6xl mx-auto py-24">
          <div className="flex flex-col justify-between">
       
       <div>
         <h5 className="font-semibold">
         WANT TO KNOW MORE?
         </h5>
         <h2 className=" font-light font-normal h2 ">
         Contact us
         </h2>

         <div className="flex justify-center my-16 ">
<div className=" py-8 px-12 ss3">
<Forms/> 
</div>
         </div>
       </div>
       

       </div>
          </div>
       </div>
    </div>
  )
}

