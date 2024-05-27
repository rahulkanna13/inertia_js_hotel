import * as React from "react";

function MyComponent(props) {
  return (
    <div className="max-w-[569px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
          <span className="bg-white flex w-full grow flex-col mx-auto pt-7 pb-12 px-6 max-md:pl-5">
            <div className="self-stretch flex w-full items-stretch justify-between gap-5 pr-4">
              <div className="flex items-stretch justify-between gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/197ce2b6515e70d739e665bc127f0d51070df78f60eaf8024e2d4bb0050419d0?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                  className="aspect-square object-contain object-center w-10 fill-orange-400 overflow-hidden shrink-0 max-w-full"
                />
                <span className="flex grow basis-[0%] flex-col items-stretch self-start">
                  <div className="text-zinc-500 text-xs">Welcome 🙏</div>
                  <div className="text-black text-base mt-2.5">Hooman</div>
                </span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c12ef343730ad96cda28570ff8e52207bc6a2e5508d50d066fa0aa42e0d91cde?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-square object-contain object-center w-8 fill-orange-400 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
              />
            </div>
            <div className="bg-zinc-300 self-stretch flex flex-col justify-center mt-7 pl-4 pr-16 py-3 rounded-xl items-start max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c131fd941a29932140e38f83edb4ec47921a27184e49f18ae2a204d83e242988?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
              />
            </div>
            <span className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full flex-col mt-9 pt-10 pb-4 px-5 rounded-xl max-md:pl-5">
              <div className="self-stretch flex justify-between gap-4 items-start">
                <span className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-black text-xl font-medium whitespace-nowrap">
                    Dates
                  </div>
                  <div className="text-stone-400 text-xs font-medium mt-7">
                    From
                  </div>
                  <div className="text-stone-950 text-base whitespace-nowrap mt-4">
                    25 , Jan 2024
                  </div>
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebcc4cab8fdc115fbea1aa07416487302d0b3a419e08762de3ab202873878b5c?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                  className="aspect-square object-contain object-center w-6 fill-white overflow-hidden shrink-0 max-w-full mt-16 self-end max-md:mt-10"
                />
                <span className="flex grow basis-[0%] flex-col items-stretch mt-11 self-end max-md:mt-10">
                  <div className="text-stone-400 text-xs font-medium">To</div>
                  <div className="text-stone-950 text-base whitespace-nowrap mt-4">
                    26 , Jan 2024
                  </div>
                </span>
              </div>
              <div className="text-black text-xl font-medium self-stretch mt-11 max-md:mt-10">
                Persons
              </div>
              <span className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pt-6 pb-2.5 px-5 rounded-lg">
                <div className="text-stone-900 text-base">
                  Adults
                  <br />
                  <span className="text-xs text-stone-900"> After 12</span>{" "}
                </div>
                <span className="flex items-center gap-4 mt-1.5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee524a67df0d06758bfcad10cb7ebc18e0bfd5b7268ae3343cc3519b32a2ca0b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-black text-sm font-bold my-auto">10</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5d118aabc43eea84bdf51dccc85d33aa25197f404c17fb5ccc268fcdc43e0a?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </span>
              </span>
              <span className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pt-6 pb-2.5 px-5 rounded-lg">
                <div className="text-stone-900 text-base">
                  Children
                  <br />
                  <span className="text-xs text-stone-900"> 0 - 12 years</span>
                </div>
                <span className="flex items-center gap-4 mt-1.5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/95de24a9da862adc81ba6fb3a2a6dab7f9688e267bf833c500ed0aa563a73ce8?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-black text-sm font-bold my-auto">10</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1e77f784ffbf7f38fee5747867e586080f0c49e3ab3b1e25c96f7064f23f17c?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </span>
              </span>
              <div className="flex-col text-black text-base font-medium relative fill-orange-300 overflow-hidden self-center aspect-[7.766666666666667] w-[233px] max-w-full justify-center items-center mt-8 px-16 py-2.5 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/845f4c465ed91374081dd98d3e5bd89775ee1dd833cdb58572f8f2b8430a79e4?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                Search
              </div>
            </span>
            <div className="text-black text-xl font-medium self-stretch mt-20 max-md:mt-10">
              Featured
              <br />
            </div>
            <div className="flex-col overflow-hidden relative flex aspect-[0.8788927335640139] w-[254px] max-w-full items-stretch mt-8 pt-12 self-start">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56133fbb6c41ac1e48de1b91caf0dc34cd9640cf75479005ec4fddec7464773?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <span className="relative text-black text-xl font-medium border bg-white mt-44 pl-7 pr-16 pt-4 pb-2.5 rounded-none border-solid border-black items-start max-md:mt-10 max-md:px-5">
                Rahul Hotel
                <br />
                Thirukkadaiyur{" "}
              </span>
            </div>
            <div className="text-black text-xl font-medium self-stretch mt-16 max-md:mt-10">
              Top 10 Hotels <br />
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-5 mr-3 mt-11 max-md:ml-2 max-md:mr-2.5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a2b6b113411d0ce854dd335ecd78c5bc1b50a1347eda9f5a5b417f3fe5896c9?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-[1.11] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a39d2169ed39ec87892ac788317f11dd9508f32e76cc7e4c9b71ed5fa9c887c7?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-[1.11] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="self-stretch flex justify-between gap-5 mr-3 mt-5 mb-12 items-start max-md:ml-2 max-md:mr-2.5 max-md:mb-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e0344d80f41074384edce825f31413e8bedaeffa2ddd645a08521738aefcb2b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-[1.11] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3935cb4fe6863f52dd529392502de07b67e2e7450f20d9381f4f7da32c64477b?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
                className="aspect-[1.11] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full mt-2.5"
              />
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0" />
      </div>
    </div>
  );
}


