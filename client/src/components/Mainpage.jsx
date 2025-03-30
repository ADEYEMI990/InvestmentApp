import React from "react";
import { assets } from "../assets/assets";

const Mainpage = () => {
  return (
    <div>
      <main className="relative overflow-x-hidden">
        <div id="home" className="relative bg-none">
          <div id="home" className="relative bg-none">
            <div className="mx-auto mb-16 max-w-[1424px] w-full overflow-hidden">
              <div className="px-4 pb-12 pt-24 lg:flex md:px-24 lg:pb-24 lg:pt-56 sm:pt-44">
                <div className="max-w-3xl">
                  <div className="relative flex">
                    <img
                      alt="Ton Head"
                      fetchPriority="high"
                      width="1000"
                      height="1000"
                      data-nimg="1"
                      className="mx-auto h-auto w-full flex sm:hidden"
                      data-aos="fade-down"
                      data-aos-delay="100"
                      src={assets.NASA}
                    />
                    <div className="pointer-events-none absolute bottom-0 z-10 h-[150px] w-full rounded-full bg-[#2db9ff70] blur-[50px] filter sm:hidden -translate-y-[10px]"></div>
                  </div>
                  <div
                    className="sm:justify-normal mx-auto mb-5 w-full flex items-center justify-between gap-x-5 lg:mx-0 sm:w-fit sm:gap-x-10"
                    data-aos="fade-down"
                  >
                    <div className="min-w-fit flex items-center gap-x-3 text-[14px] text-[#04060b] font-medium sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="currentColor"
                        className="h-[18px] w-[18px] text-[#0098EA] sm:h-[24px] sm:w-[24px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 .25a.75.75 0 000 1.5h1.113c-3.745 2.986-6.594 4.877-9.303 6.134C7.012 9.18 4.329 9.819.905 10.256a.75.75 0 00.19 1.488c3.519-.45 6.364-1.117 9.346-2.5 2.915-1.352 5.926-3.372 9.81-6.483V4a.75.75 0 001.5 0V2A1.75 1.75 0 0020 .25h-2zM21 9a2 2 0 10-4 0v10a2 2 0 004 0V9zM5 17a2 2 0 10-4 0v2a2 2 0 104 0v-2zm6-6a2 2 0 012 2v6a2 2 0 11-4 0v-6a2 2 0 012-2z"
                        ></path>
                      </svg>
                      High ROI
                    </div>
                    <div className="min-w-fit flex items-center gap-x-3 text-[14px] text-[#04060b] font-medium sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-[18px] w-[18px] text-[#0098EA] sm:h-[24px] sm:w-[24px]"
                      >
                        <path d="M10.033 3.271a2.158 2.158 0 013.934 0l1.39 2.93c.32.673.938 1.14 1.653 1.248l3.11.47c1.799.272 2.517 2.57 1.215 3.89l-2.25 2.28a2.338 2.338 0 00-.631 2.02l.531 3.22c.308 1.863-1.573 3.284-3.183 2.404l-2.781-1.52a2.12 2.12 0 00-2.042 0l-2.781 1.52c-1.61.88-3.49-.541-3.183-2.404l.531-3.22a2.338 2.338 0 00-.63-2.02l-2.251-2.28C1.363 10.49 2.08 8.191 3.88 7.92l3.11-.47A2.202 2.202 0 008.641 6.2l1.39-2.93z"></path>
                      </svg>
                      Simple
                    </div>
                    <div className="min-w-fit flex items-center gap-x-3 text-[14px] text-[#04060b] font-medium sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="currentColor"
                        className="h-[18px] w-[18px] text-[#0098EA] sm:h-[24px] sm:w-[24px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.378 2.943L7.376.722a4 4 0 013.249 0l4.978 2.212c1.455.647 2.41 2.101 2.309 3.691-.391 6.098-2.135 8.855-6.847 12.053a3.686 3.686 0 01-4.13-.001C2.239 15.497.43 12.778.07 6.604c-.092-1.58.862-3.018 2.308-3.66zm10.187 5.55a.75.75 0 10-1.13-.987l-2.87 3.28a.25.25 0 01-.344.03L6.47 9.415a.75.75 0 10-.937 1.172l1.752 1.402a1.75 1.75 0 002.41-.214l2.87-3.28z"
                        ></path>
                      </svg>
                      Secure
                    </div>
                  </div>
                  <h1
                    className="xs:px-8 mx-auto text-center text-[36px] text-[#04060b] font-bold leading-[45px] lg:mx-0 lg:w-[595px] sm:px-0 lg:text-start sm:text-[100px] sm:leading-[90px]"
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    Earn
                    <span className="mx-20px from-[#2D83EC] to-[#1AC9FF] from-50% bg-gradient-to-r bg-clip-text text-transparent">
                      passive
                    </span>
                    <br />
                    income in USDT
                  </h1>
                  <div
                    className="mx-auto my-6 max-w-xl text-center lg:mx-0 sm:my-10 lg:text-start"
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <p className="text-[18px] text-[#191f2f] leading-[25px] sm:text-[21px] sm:leading-[30px]">
                      Galaxy - automated staking smart contract based on
                      artificial intelligence
                    </p>
                  </div>
                  <div
                    className="mx-auto w-full flex flex-col items-center gap-x-6 gap-y-6 lg:mx-0 sm:w-fit sm:flex-row"
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <a
                      href="#/dashboard"
                      className="group shadow-button h-[65px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition sm:w-[270px] hover:bg-[#00a6ff]"
                    >
                      <span className="flex items-center justify-center">
                        Get Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <div className="group shadow-button h-[65px] w-full flex cursor-pointer items-center justify-center border border-$primary rounded-2xl border-solid text-$primary font-bold transition sm:w-[200px] hover:bg-[#00a6ff] hover:text-white">
                      <div className="i-solar:download-minimalistic-outline mr-2 h-[24px] w-[24px] group-hover:text-$text-white"></div>
                      App
                    </div>
                  </div>
                </div>
                <div className="relative flex">
                  <img
                    alt="Ton Head"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="hidden max-h-[640px] max-w-[640px] min-h-[640px] min-w-[640px] -mt-[55px] lg:ml-10 xl:ml-10 lg:block"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src={assets.NASA}
                    style={{ color: "transparent" }}
                  />
                  <div className="pointer-events-none absolute bottom-0 hidden h-[150px] w-[400px] translate-x-[170px] rounded-[50%] bg-[#2db9ff70] blur-[50px] filter -z-30 sm:block -translate-y-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="staking" className="relative bg-none"></div>
        <div id="advantages" className="relative bg-none">
          <div className="mx-[25px] max-w-[1173px] py-[48px] 2xl:mx-auto lg:mx-[107px] sm:mx-[64px]">
            <div className="bg-[#f4f4f4] border-2 border-[#e0e0e0] p-8 rounded-lg">
              <h1 className="pb-10 text-center text-[28px] font-bold leading-normal lg:text-[75px] md:text-[65px] lg:leading-[80px] md:leading-[65px] hover:text-[#ff5722]">
                Platform Advantages
                <br />
                <span className="text-[#2db9ff] hover:text-[#007bb5]">
                  Galaxy
                </span>
              </h1>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2 xl:grid-rows-2">
              <div
                className="relative overflow-hidden border border-[#0098ea] rounded-[24px] bg-[#f7f9fb] p-8 sm:p-12"
                data-aos="fade-left"
              >
                <div className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-start">
                  <div className="relative order-2 max-w-[266px] flex flex-col sm:order-1">
                    <h2 className="z-10 text-[26px] font-bold leading-[24px] sm:text-[34px] sm:leading-[35px]">
                      Fixed Percentage
                    </h2>
                    <p className="z-10 py-[10px] text-[14px] text-[#728a96] font-medium leading-[18px] sm:py-[14px] sm:text-[16px] sm:leading-[24px]">
                      The system automatically sets and accrues dividends on the
                      deposit, depending on its amount.
                    </p>
                    <a
                      aria-current="page"
                      href="#/#calculator"
                      className="router-link-active router-link-exact-active mx-auto mt-5 text-[14px] text-[#2db9ff] font-semibold leading-normal sm:mx-0 sm:mt-0 hover:underline"
                    >
                      <span className="flex items-center">
                        View Tariffs
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="z-10 order-1 sm:order-2">
                    <img
                      alt="Block-1"
                      loading="lazy"
                      width="749"
                      height="827"
                      decoding="async"
                      data-nimg="1"
                      className="h-auto w-[115px] object-scale-down pb-5 sm:w-[185px] sm:pb-0"
                      src={assets.IMG2}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="relative overflow-hidden border border-[#0098ea] rounded-[24px] bg-[#f7f9fb] p-8 sm:p-12"
                data-aos="fade-right"
              >
                <div className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-start">
                  <div className="relative order-2 max-w-[266px] flex flex-col sm:order-1">
                    <h2 className="z-10 text-[26px] font-bold leading-[24px] sm:text-[34px] sm:leading-[35px]">
                      Reliability Guarantee
                    </h2>
                    <p className="z-10 py-[10px] text-[14px] text-[#728a96] font-medium leading-[18px] sm:py-[14px] sm:text-[16px] sm:leading-[24px]">
                      The investor's funds are fully available to them at any
                      time, withdrawal is only possible to the wallet from which
                      the investment was made.
                    </p>
                    <a
                      aria-current="page"
                      href="#/#calculator"
                      className="router-link-active router-link-exact-active mx-auto mt-5 text-[14px] text-[#2db9ff] font-semibold leading-normal sm:mx-0 sm:mt-0 hover:underline"
                    >
                      <span className="flex items-center">
                        Calculate Profit
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="z-10 order-1 sm:order-2">
                    <img
                      alt="Block-1"
                      loading="lazy"
                      width="749"
                      height="827"
                      decoding="async"
                      data-nimg="1"
                      className="h-auto w-[115px] object-scale-down pb-5 sm:w-[185px] sm:pb-0"
                      src={assets.IMG1}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="relative overflow-hidden border border-[#0098ea] rounded-[24px] bg-[#f7f9fb] p-8 sm:p-12"
                data-aos="fade-left"
              >
                <div className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-start">
                  <div className="relative order-2 max-w-[266px] flex flex-col sm:order-1">
                    <h2 className="z-10 text-[26px] font-bold leading-[24px] sm:text-[34px] sm:leading-[35px]">
                      Allocation
                    </h2>
                    <p className="z-10 py-[10px] text-[14px] text-[#728a96] font-medium leading-[18px] sm:py-[14px] sm:text-[16px] sm:leading-[24px]">
                      Thanks to automated fund allocation, only the investor has
                      full control over their assets.
                    </p>
                    <a
                      aria-current="page"
                      href="#/#allocation"
                      className="router-link-active router-link-exact-active mx-auto mt-5 text-[14px] text-[#2db9ff] font-semibold leading-normal sm:mx-0 sm:mt-0 hover:underline"
                    >
                      <span className="flex items-center">
                        View Allocation
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="z-10 order-1 sm:order-2">
                    <img
                      alt="Block-1"
                      loading="lazy"
                      width="749"
                      height="827"
                      decoding="async"
                      data-nimg="1"
                      className="h-auto w-[115px] object-scale-down pb-5 sm:w-[185px] sm:pb-0"
                      src={assets.IMG5}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-16 flex justify-center justify-items-center"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <a
                href="#/dashboard"
                className="group hover:shadow-button h-[65px] w-full flex items-center justify-center border border-[#0098ea] rounded-2xl bg-transparent text-[#0098ea] font-bold transition sm:w-[270px] hover:border-0 hover:bg-[#00a6ff] hover:text-white"
              >
                <span className="flex items-center justify-center">
                  Stake Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-2 h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div id="how-to-start" className="relative overflow-x-hidden bg-none">
          <div className="mx-[25px] max-w-[1173px] py-[48px] 2xl:mx-auto lg:mx-[107px] sm:mx-[64px]">
            <div className="flex flex-col gap-x-[82px] lg:flex-row">
              <div className="relative" data-aos="fade-right">
                <img
                  alt="Eth Head"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="mb-10 h-[215] min-h-[215] min-w-[215] w-[215] sm:mb-0 sm:mt-0 lg:block sm:hidden lg:h-[600] lg:min-h-[600] lg:min-w-[600] lg:w-[600]"
                  src={assets.IMG3}
                  style={{ color: "transparent" }}
                />
                <div className="pointer-events-none absolute top-0 hidden h-[270px] w-[339px] translate-y-[90%] rounded-[50%] bg-[#2db9ff] blur-[125px] filter -z-10 lg:block sm:hidden -translate-x-[80px]"></div>
              </div>
              <div className="flex flex-col lg:w-[575px]" data-aos="fade-left">
                <h2 className="mb-4 text-center text-[28px] font-bold leading-normal lg:text-start lg:text-[75px] sm:text-[65px] sm:leading-[80px]">
                  How to start{" "}
                  <span className="block text-[#2db9ff]">investing</span> in
                  Galaxy?
                </h2>
                <p className="text-center text-[16px] text-[#1e2337] leading-[25px] lg:text-start sm:text-[20px] sm:leading-[30px]">
                  When creating Galaxy, our team paid special attention to the
                  convenience of working with investments. Managing your deposit
                  has never been so fast and simple.
                </p>
                <div
                  className="mb-4 mt-8 flex flex-col items-center gap-x-6 gap-y-6 border border-[#192751] rounded-[12px] px-[32px] py-[23px] sm:flex-row"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <span className="text-[45px] text-[#2db9ff] font-semibold leading-[45px]">
                    01
                  </span>
                  <span className="text-center text-[16px] font-medium leading-[20px] sm:text-start sm:text-[20px]">
                    Choose the plan that suits you best
                  </span>
                </div>
                <div
                  className="mb-4 flex flex-col items-center gap-x-6 gap-y-6 border border-[#192751] rounded-[12px] px-[32px] py-[23px] sm:flex-row"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <span className="text-[45px] text-[#2db9ff] font-semibold leading-[45px]">
                    02
                  </span>
                  <span className="text-center text-[16px] font-medium leading-[20px] sm:text-start sm:text-[20px]">
                    Make a deposit of{" "}
                    <span className="text-[#2db9ff]">10.00 USDT</span> or more
                  </span>
                </div>
                <div
                  className="mb-4 flex flex-col items-center gap-x-6 gap-y-6 border border-[#192751] rounded-[12px] px-[32px] py-[23px] sm:flex-row"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <span className="text-[45px] text-[#2db9ff] font-semibold leading-[45px]">
                    03
                  </span>
                  <span className="text-center text-[16px] font-medium leading-[20px] sm:text-start sm:text-[20px]">
                    Receive dividends and withdraw them
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="plans" className="relative bg-none">
          <div className="mx-auto max-w-[1170px]">
            <div className="">
              <div className="mx-auto px-6 pb-20 lg:px-8 lg:py-20">
                <div className="mx-auto">
                  <h1 className="text-center text-[28px] font-bold leading-normal sm:text-[75px] sm:leading-[80px]">
                    Plans
                  </h1>
                  <div className="font-muller mt-[55px] flex flex-col flex-wrap gap-5 lg:flex-row">
                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">30.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              10 - 200 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>

                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">36.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              200 - 700 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>

                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">39.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              700 - 2,000 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>

                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">42.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              2,000 - 10,000 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>

                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">45.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              10,000 - 30,000 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>

                    <div
                      className="w-full lg:w-[30%] border rounded-[21px] bg-[#f7f9fb] px-[30px] py-[35px] transition-all hover:scale-[1.02]"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="flex items-center gap-x-[25px] lg:flex-col lg:items-start lg:gap-y-[48px]">
                        <div className="max-w-fit rounded-[21px] bg-[#ffffff] px-[17px] py-[50px] lg:px-[20px] lg:py-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-[42px] w-[42px] text-[#0098ea]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            ></path>
                          </svg>
                        </div>
                        <div className="mt-3 flex flex-col gap-[25px] lg:mt-0 sm:min-w-fit">
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              <span className="text-[45px]">50.00%</span>
                              <br />
                              Per Day
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Your profit
                            </span>
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <span className="text-[21px] font-bold leading-[21px]">
                              30,000 - 100,000 USDT
                            </span>
                            <span className="text-[14px] text-[#757185] font-bold leading-[21px]">
                              Investments
                            </span>
                          </div>
                        </div>
                        <div className="hidden w-full sm:block lg:hidden">
                          <a
                            href="#/dashboard"
                            className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                      <div className="mt-[25px] lg:block sm:hidden">
                        <a
                          href="#/dashboard"
                          className="group shadow-button h-[48px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition hover:bg-[#00a6ff]"
                        >
                          Invest Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="allocation" className="bg-none">
          <div className="mx-auto max-w-[1424px] w-full px-0 pb-16 md:px-10">
            <div className="relative isolate flex flex-col items-center overflow-hidden border border-[#0098ea] rounded-[24px] bg-[#f7f9fb] px-[16px] py-[20px] lg:gap-x-16 lg:px-[126px] lg:py-[56px] sm:px-[56px] sm:py-[66px]">
              <h2 className="max-w-[800px] text-center text-[28px] font-bold leading-normal lg:text-[75px] sm:text-[65px] sm:leading-[80px]">
                Platform Fund <span className="text-[#2db9ff]">Allocation</span>
              </h2>
              <p className="mx-auto my-6 max-w-[890px] text-center text-[16px] text-[#1e2337] leading-[25px] sm:my-8 sm:text-[20px] sm:leading-[30px]">
                The smart AI-based fund management system automatically
                accumulates and distributes incoming investments and their
                payouts
              </p>
              <div className="flex flex-col items-center justify-center gap-x-4 xl:flex-row">
                <div data-aos="fade-right" className="aos-init aos-animate">
                  <img
                    alt="Chart Desktop"
                    loading="lazy"
                    width="401"
                    height="275"
                    decoding="async"
                    data-nimg="1"
                    className="my-8 block min-h-[182px] min-w-[265px] xl:hidden sm:min-h-[275px] sm:min-w-[401px]"
                    src={assets.IMG4}
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt="Chart Desktop"
                    loading="lazy"
                    width="663"
                    height="354"
                    decoding="async"
                    data-nimg="1"
                    className= "hidden min-h-[354px] min-w-[663px] xl:block"
                    src={assets.IMG7}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex flex-col gap-y-[41px] text-center sm:text-start">
                  <div data-aos="fade-down" className="aos-init aos-animate">
                    <p className="mb-[8px] text-[18px] text-[#2db9ff] font-semibold leading-[30px] sm:text-[20px]">
                      90% to Investors
                    </p>
                    <p className="text-[14px] text-[#1e2337] leading-[20px]">
                      90% of the pool funds are allocated to investors who have
                      made deposits
                    </p>
                  </div>
                  <div data-aos="fade-down" className="aos-init aos-animate">
                    <p className="mb-[8px] text-[18px] text-[#4BB34B] font-semibold leading-[30px] sm:text-[20px]">
                      5% Project Maintenance
                    </p>
                    <p className="text-[14px] text-[#1e2337] leading-[20px]">
                      5% of the pool funds are allocated to project maintenance
                      by the development team and technical staff
                    </p>
                  </div>
                  <div data-aos="fade-down" className="aos-init aos-animate">
                    <p className="mb-[8px] text-[18px] text-[#FF3347] font-semibold leading-[30px] sm:text-[20px]">
                      5% Marketing
                    </p>
                    <p className="text-[14px] text-[#1e2337] leading-[20px]">
                      5% of the pool funds are allocated to platform promotion
                      in media resources
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full sm:w-fit" data-aos="fade-up">
                <a
                  href="#/dashboard"
                  className="group shadow-button h-[65px] w-full flex items-center justify-center rounded-2xl bg-[#0098ea] text-white font-bold transition sm:w-[371px] hover:bg-[#00a6ff]"
                >
                  <span className="flex items-center justify-center">
                    Stake Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="ml-2 h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mainpage;
