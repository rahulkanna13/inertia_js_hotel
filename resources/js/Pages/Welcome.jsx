import { Link, Head } from '@inertiajs/react';
import SearchComponent from '../Components/SearchBar';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div>
        <form className="self-stretch flex w-full items-stretch justify-between gap-5 pr-4">
      <header className="flex items-stretch justify-between gap-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/197ce2b6515e70d739e665bc127f0d51070df78f60eaf8024e2d4bb0050419d0?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
          className="aspect-square object-contain object-center w-10 fill-orange-400 overflow-hidden shrink-0 max-w-full"
          alt=""
        />
        <span className="flex grow basis-[0%] flex-col items-stretch self-start">
          <div className="text-zinc-500 text-xs" aria-label="Welcome message">
            Welcome 🙏
          </div>
          <div className="text-black text-base mt-2.5" aria-label="Username">
            Hooman
          </div>
        </span>
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c12ef343730ad96cda28570ff8e52207bc6a2e5508d50d066fa0aa42e0d91cde?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
        className="aspect-square object-contain object-center w-8 fill-orange-400 overflow-hidden shrink-0 max-w-full mt-1.5 self-start"
        alt=""
      />

      
    </form>

     <div className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full flex-col mt-9 pt-10 pb-4 px-5 rounded-xl max-md:pl-5">
      <header className="self-stretch flex justify-between gap-4 items-start">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <h1 className="text-black text-xl font-medium whitespace-nowrap">
            Dates
          </h1>
          <div className="text-stone-400 text-xs font-medium mt-7">From</div>
          <div className="text-stone-950 text-base whitespace-nowrap mt-4">
            25 , Jan 2024
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebcc4cab8fdc115fbea1aa07416487302d0b3a419e08762de3ab202873878b5c?apiKey=fef670b9a81147ea802d6ba68d9dbb2a&"
          className="aspect-square object-contain object-center w-6 fill-white overflow-hidden shrink-0 max-w-full mt-16 self-end max-md:mt-10"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch mt-11 self-end max-md:mt-10">
          <div className="text-stone-400 text-xs font-medium">To</div>
          <div className="text-stone-950 text-base whitespace-nowrap mt-4">
            26 , Jan 2024
          </div>
        </div>
      </header>
      <h1 className="text-black text-xl font-medium self-stretch mt-11 max-md:mt-10">
        Persons
      </h1>
      <form
        className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pt-6 pb-2.5 px-5 rounded-lg"
        role="search"
      >
        <div className="text-stone-900 text-base">
          <label htmlFor="adults">Adults</label><br/>
          <span className="text-xs text-stone-900">After 12</span>{" "}
        </div>
        <div className="flex items-center gap-4 mt-1.5 self-start">
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
        </div>
      </form>
      <form
        className="shadow-sm backdrop-blur-[2px] bg-white self-stretch flex w-full items-stretch justify-between gap-5 mt-2.5 pt-6 pb-2.5 px-5 rounded-lg"
        role="search"
      >
        <div className="text-stone-900 text-base">
          <label htmlFor="children">Children</label><br/>
          <span className="text-xs text-stone-900">0 - 12 years</span>
        </div>
        <div className="flex items-center gap-4 mt-1.5 self-start">
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
        </div>
      </form>
      <Symbol
        className="flex flex-col relative shrink-0 box-border max-sm:hidden"
        symbol={{}}
      />
      <div className="flex-col text-black text-base font-medium relative fill-orange-300 overflow-hidden self-center aspect-[7.766666666666667] w-[233px] max-w-full justify-center items-center mt-8 px-16 py-2.5 max-md:px-5">
     
       <SearchComponent></SearchComponent>
      </div>
    </div>

    </div>
      );
}
