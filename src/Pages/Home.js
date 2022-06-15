import { useState } from "react";
import CardsContainer from "../components/CardsContainer";
import Sidebar from "../components/Sidebar";
import TableContainer from "../components/TableContainer";
import { BsArrowRightShort } from "react-icons/bs";

function Index() {
  const [toggle, setToggle] = useState(true)

  const TokenMetaData = [{ key: 'Contract Address', value: '0x1e18...2C75EB' }, { key: 'Token Total Supply', value: '1,000,000' }, { key: 'Token Price', value: '~$ 0.000240' }, { key: 'Circulation Supply', value: '499,223,377,043,267' }, { key: 'Total Burned Tokens', value: '500,776,622,956,733' },]
  const DividendDetail = [{ key: 'Rewards Contract Address', value: '0x92e9...68af40' }, { key: 'Total Rewards Distributed', value: '13.74 ETH' }, { key: 'Total Rewards Distributed USD', value: '~$ 24,926.16' }, { key: 'Reward Cycle', value: 'Hourly' }, { key: 'Rewards Distribution Completion', value: '0.94 %' }, { key: 'Total Pending Rewards', value: '0.17 ETH' },]

  return (
    <>
      <section className="wrapper fixed -z-10 w-full flex items-start justify-between gap-6 lg:gap-8 pb-24">
        <div className="w-320 lg:w-384 hidden 2xl:block"></div>
        <main className="w-full h-screen overflow-hidden flex items-start flex-col lg:flex-row">
          <img className="w-full" src="/assets/bg-1.svg" alt="" />
          <img className="w-full" src="/assets/bg-2.svg" alt="" />
        </main>
      </section>

      <section>
        <main className="flex items-start gap-6 lg:gap-8">

          <section className={`w-320 lg:w-384 absolute 2xl:relative z-10 lg:block transition-all ${toggle ? 'open-sidebar' : 'close-sidebar'}`}>
            <Sidebar />
            <div onClick={() => setToggle(!toggle)} className="circle absolute top-7 -right-6 grid 2xl:hidden place-content-center w-32 h-32 text-white text-24 cursor-pointer">
              <BsArrowRightShort />
            </div>
          </section>

          <div className="w-full mb-99">
            <section className="container mx-auto px-24 lg:px-99 md:mt-52">

              <img className="block md:hidden mx-auto w-80 my-48" src="/assets/meta-warrior.svg" alt="" />

              <CardsContainer />

              <div className="flex flex-wrap -mx-1 lg:-mx-4 mt-52">

                <div className=" my-18 px-14 hidden md:block w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
                  <article className="py-18 px-22 custom-shadow">
                    <h5 className='font-semibold text-32 text-gray-200 mb-12'>Natazuki</h5>
                    <p className='text-16 text-gray-200'>
                      <span className="block mb-6"> Minting is Live , Mint Price: 0.035 ETH  </span>
                      <span className="block mb-6"> 6666 Azuki went through a chemical explosion, living underground on the ETH blockchain. Azuki Demons are bigger, more brutal and stronger. </span>
                      <span className="block mb-6"> Azuki Demon is Created by 3 Azuki Holders. Once you mint an Azuki Demon, you will get the Azuki Demon DAO membership and Airdrop $ZUKI token rewards. Meanwhile, you can get the ticket to receive 3D Azuki Demon and NFT Derivatives airdrop and play to earn $ZUKI in Zuki Ecosystem. </span>
                      <span className="block mb-6"> In addition to the appreciation of NFT holders, Azuki Demon DAO will distribute a portion of the net revenue to all holders at a fixed time, such as quarterly. The amount will be calculated based on the proportion to their holdings. </span>                     </p>
                  </article>
                </div>

                <div className=" my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
                  <article className="bg-primary rounded-lg pt-22 pb-32 px-28 custom-shadow">
                    <h5 className='font-semibold text-28 text-gray-200 text-left mb-26'>Token Metadata</h5>
                    {
                      TokenMetaData?.map(data => (
                        <div className="text-center mb-22">
                          <h6 className="text-xl text-secondary font-semibold"> {data?.key} </h6>
                          <h6 className="text-xl text-gray-100"> {data?.value} </h6>
                        </div>
                      ))
                    }
                  </article>
                </div>

                <div className=" my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
                  <article className="bg-primary rounded-lg pt-22 pb-44 px-28 custom-shadow">
                    <h5 className='font-semibold text-28 text-gray-200 text-left mb-26'>Divident Details</h5>
                    {
                      DividendDetail?.map(data => (
                        <div className="text-center mb-22">
                          <h6 className="text-xl text-secondary font-semibold"> {data?.key} </h6>
                          <h6 className="text-xl text-gray-100"> {data?.value} </h6>
                        </div>
                      ))
                    }
                    <h6 className="font-bold text-md text-gray-200 mt-8 mb-16"> Dividend Distribution progress  </h6>
                    <div className="relative w-full h-14 bg-white rounded-full">
                      <div className="absolute top-0 w-2/5 h-14 bg-secondary rounded-full"></div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <TableContainer title="Recent Dividend Payout List ( within last 4 hours )" />
            <TableContainer title="Burn History (Total 60,000,000)" />

            <section className="container mx-auto px-24 lg:px-99 mt-52">
              <div className=" my-18 px-14 block md:hidden w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
                <article className="py-18 px-22 custom-shadow">
                  <h5 className='font-semibold text-32 text-gray-200 mb-12'>Natazuki</h5>
                  <p className='text-16 text-gray-200'>
                    <span className="block mb-6"> Minting is Live , Mint Price: 0.035 ETH  </span>
                    <span className="block mb-6"> 6666 Azuki went through a chemical explosion, living underground on the ETH blockchain. Azuki Demons are bigger, more brutal and stronger. </span>
                    <span className="block mb-6"> Azuki Demon is Created by 3 Azuki Holders. Once you mint an Azuki Demon, you will get the Azuki Demon DAO membership and Airdrop $ZUKI token rewards. Meanwhile, you can get the ticket to receive 3D Azuki Demon and NFT Derivatives airdrop and play to earn $ZUKI in Zuki Ecosystem. </span>
                    <span className="block mb-6"> In addition to the appreciation of NFT holders, Azuki Demon DAO will distribute a portion of the net revenue to all holders at a fixed time, such as quarterly. The amount will be calculated based on the proportion to their holdings. </span>                     </p>
                </article>
              </div>
            </section>

          </div>
        </main>
      </section>
    </>
  );
}

export default Index;
