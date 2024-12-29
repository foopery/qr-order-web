import { SlMagnifier } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductErrorView() {
  return (
    /* Background Div */
    <div className={`sm:flex sm:flex-col `}>
      {/* Top - div */}
      <div className={`sm:flex sm:flex-col sm:w-full sm:h-[15svh] sm:border-b`}>
        {/* Top 영역중 가게이름과 아이콘 부모 Div */}
        <div className={`sm:flex sm:w-full`}>
          {/* Top --> shop Title Div */}
          <div className={`h-[8vh] w-3/5 flex items-end px-6 text-gray-800 font-bold text-xl `}>가게이름</div>
          {/* 아이콘 배너 */}
          <div className={`h-[8vh] w-2/5 flex justify-end items-end px-6 pb-1 text-gray-800 font-bold text-xl gap-3  `}>
            <FiShoppingCart />
          </div>
        </div>
        {/* Top --> 추천메뉴 등 바로가기 영역 Div */}
        <div className={`flex w-full h-auto items-center px-4 gap-2`}>
          {/* 바로가기 items Div */}
          <div className={`border rounded-full px-2 py-1.5 text-gray-800 text-sm flex gap-2`}>
            <SlMagnifier className={`text-[1rem] mt-0.5 font-bold`} />
            메뉴 찾기
          </div>
          <div className={`border rounded-full px-3 py-1.5 text-gray-800 text-sm`}>추천 메뉴</div>
          <div className={`border rounded-full px-2 py-1.5 text-gray-800 text-sm`}>신메뉴</div>
        </div>
      </div>

      {/* Product Items Div */}
      <div className={`sm:flex sm:w-full sm:h-screen sm:py-4 sm:px-2.5`}>
        <p>Error</p>
      </div>
    </div>
  );
}
