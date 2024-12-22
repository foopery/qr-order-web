import { AiOutlineExport } from "react-icons/ai";
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
          <div className={` sm:h-[8svh] sm:w-[40rem] sm:flex sm:items-end sm:px-6 sm:text-gray-800 sm:font-bold sm:text-xl`}>가게이름</div>
          {/* 추후 아이콘 배너 들어갈 곳 */}
          <div className={` sm:h-[8svh] sm:w-full sm:flex sm:justify-center sm:items-end sm:text-gray-800 sm:font-bold sm:text-xl sm:gap-3.5`}>
            <AiOutlineExport />
            <SlMagnifier />
            <FiShoppingCart />
          </div>
        </div>
        {/* Top --> 추천메뉴 등 바로가기 영역 Div */}
        <div className={`sm:flex sm:w-full sm:h-screen sm:items-center sm:px-4 sm:gap-2`}>
          {/* 바로가기 items Div */}
          <div className={`sm:border sm:rounded-[2.5rem] sm:px-2 sm:py-1.5 sm:text-gray-800 sm:text-sm sm:flex sm:gap-2`}>
            <SlMagnifier className={`sm:flex sm:justify-center sm:items-center sm:text-[1rem] sm:mt-0.5 sm:font-bold`} />
            메뉴 찾기
          </div>
          <div className={`sm:border sm:rounded-[2.5rem] sm:px-3 sm:py-1.5 sm:text-gray-800 sm:text-sm`}>추천 메뉴</div>
          <div className={`sm:border sm:rounded-[2.5rem] sm:px-2 sm:py-1.5 sm:text-gray-800 sm:text-sm`}>신메뉴</div>
        </div>
      </div>

      {/* Product Items Div */}
      <div className={`sm:flex sm:w-full sm:h-screen sm:py-4 sm:px-2.5`}>
        <p>Error</p>
      </div>
    </div>
  );
}
