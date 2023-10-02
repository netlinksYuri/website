import './Services.css'
export default function About() {
  return (
    <div>
      {/* sessa 1*/}
      <div className="ss2 max-w-6xl mx-auto py-16 px-8 sm:px-0 ">
        <div className="flex flex-col sm:flex-row  justify-center sm:items-center  justify-between">

          <div>
            <h5 className="font-semibold">
              SERVICES WE OFFER
            </h5>
            <h2 className=" font-light font-normal ">
              Services
            </h2>
          </div>
          <div className="flex  items-end" >
            <h5 className=" sm:mt-0 mt-6 text-left sm:text-right h5s">
              Our teams can help you understand the
              market and infrastructure to assess your <br className="sm:block hidden" />
              decision to invest locally and have you set for
              trading:
            </h5>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" flex flex-col basis-6/12  mt-12 sm:mr-32">

            <div className="py-12 sm:py-24 sm:px-12 px-8   flex flex-col justify-center cardServ ">
              <p className="text-gray-50 text-lg">
                • Hardware procurement <br />
                • Due Diligence Questionnaire <br />
                • Product details <br />
                • Exchange fees simulation <br />
                • Initial Margin Simulations <br />
                • Exchange Incentives for new customers <br />
                • Market Making Benefits and Programs
              </p>
            </div>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12  sm:ml-32">

            <div className="py-12 sm:py-24 sm:px-12 px-8   flex flex-col justify-center cardServ ">
              <p className="text-gray-50 text-lg">
                •  Historical Market
                Data (BackTest)<br />

                • End of Day Market
                Data PCAP Files (ns)<br />

                • Daily Closing Prices<br />

                • Collocated server for
                real time market
                data <br  className="sm:block hidden" />
                collection,ertification and early
                prod tests <br  className="sm:block hidden"/> (quick
                setup for all
                environments)
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* sessa 2*/}
      <div className="ss3 ">
        <div className="flex flex-col sm:flex-row justify-between max-w-6xl mx-auto py-16 px-8 sm:px-0">

          <div className=" flex flex-col basis-6/12  mt-12 ">
            <h5 className="font-semibold uppercase text-white">
              Execution
            </h5>
            <h2 className="  font-bold sm:text-md text-lg text-white">
              Detailed Services <br />
              Focused on high<br /> 
              Performing electronic<br /> 
              Trading
            </h2>
            <br />
            <h5 className=" pt-2 text-left  text-white">
              Our dedicated team does a
              proactive, careful and highquality <br className="sm:block hidden" />
              real-time monitoring
              and can help tailor made the
              best <br className="sm:block hidden" />trading solution for your
              needs:
            </h5>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12 ">

            <div className="py-12 sm:py-24 sm:px-12 px-8  flex flex-col justify-center cardServ2 sm:ml-32 ">
              <p className="text-gray-50 text-lg">
                • Order Entry Fine Tuning<br />
                • Latency+MsgsExcess Monitoring<br />
                • Normalized Market Data<br />
                • Colocation Infra Management <br />
                • Global Connectivity <br />
                • Infrastructure as Service
              </p>
            </div>
          </div>

        </div>

      </div>
      {/* sessa 3*/}
      <div className="ss4-S ">
        <div className="flex flex-col sm:flex-row justify-between max-w-6xl mx-auto py-16 px-8 sm:px-0">

          <div className=" flex flex-col basis-6/12  mt-12 ">
            <h5 className="font-semibold uppercase">
              Post trade
            </h5>
            <h2 className="  font-bold sm:text-md text-lg ">
              Detailed Services<br />
              Focused on high <br />
              Performing <br />
              Electronic trading
            </h2>
            <br />
            <h5 className=" pt-2 text-left capaapp">
              Besides all services provided by
              our efficient middle and <br className="sm:block hidden"/>
              backoffice teams, Nova Futura tech
              teams can also offer <br className="sm:block hidden" />
              the below electronic post trade services:
            </h5>
          </div>
          <div className=" flex flex-col basis-6/12  mt-12 ">

            <div className="py-12 sm:py-24 sm:px-12 px-8  flex flex-col justify-center cardServ sm:ml-32 ">
              <p className="text-gray-50 text-lg">
                • SFTP File Transfers<br />
                • WebServices<br />
                • Drop Copy FIX 4.4 and 4.2<br />
                • Enriched Drop Copy (voice+electronic<br />
                • Reverse Staging to Bloomberg
                EMSX
              </p>
            </div>
          </div>

        </div>

      </div>
      {/* sessa 4*/}

      <div className="ss4 py-24">
        <div className="flex flex-row justify-center  max-w-6xl mx-auto ">

          <div className=" flex flex-col basis-5/12  items-center p-3 card">
            <div className="text-left">
            <img className=" mx-auto" src="phoneProducts.png" alt="logo" />
              
            </div>
          </div>
          <div className=" flex flex-col basis-7/12  justify-center  ">
            <h3 className="font-bold text-left app text-lg text-gray-50 ">
            We provide the best online experience, <br className="sm:block hidden"/> 
            enabling the use of a wide range of <br className="sm:block hidden"/>
            platforms to serve all types of investors
            </h3>
            <p className="font-normal text-left text-sm text-gray-50 mt-4 "><span className="font-bold">All your investments in one place.</span> <br/>
            Download the Nova Futura app to invest<br/> 
            with freedom and all the support<br/>
            you may need.</p>
            <div className="mt-12">
            <a href="#" class="btn-forms mt-4 py-2 px-5 text-gray-50" aria-current="page">Download now</a>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}