import { SlMagnifier } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductLoadingView() {
  return (
    /* Background Div */
    <div className={`sm:flex sm:flex-col animate-pulse`}>
      {/* Top - div */}
      <div className={`fixed top-0 left-0 right-0 z-10 flex flex-col w-full h-[17vh]  bg-white gap-6 shadow-md`}>
        {/* Top 영역중 가게이름과 아이콘 부모 Div */}
        <div className={`sm:flex sm:w-full`}>
          {/* Top --> shop Title Div */}
          <div className={`h-[8vh] w-3/5 flex items-end px-6 text-gray-800 font-bold text-xl`}>가게이름</div>
          {/* 아이콘 배너 */}
          <div className={`h-[8vh] w-2/5 flex justify-end items-end px-6 pb-1 text-gray-800 font-bold text-xl gap-3`}>
            <FiShoppingCart />
          </div>
        </div>
        {/* Top --> 추천메뉴 등 바로가기 영역 Div */}
        <div className={`flex w-full h-[1rem] items-center px-4 gap-2 `}>
          {/* 바로가기 items Div */}
          <div className={`border rounded-full px-2 py-1.5 text-gray-800 text-sm flex gap-2`}>
            <SlMagnifier className={`text-[1rem] mt-0.5 font-bold`} />
            메뉴 찾기
          </div>
          <div className={`border rounded-full px-3 py-1.5  text-sm`}>추천 메뉴</div>
          <div className={`border rounded-full px-2 py-1.5  text-sm`}>신메뉴</div>
        </div>
      </div>

      {/* Product Items Div */}
      <div className={`sm:flex sm:w-full sm:h-screen`}>
        <div className={`flex flex-col w-full pt-[18vh] py-1.5`}>
          {/* 로딩 스켈레톤을 위한 반복문 */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div className={`flex border-b-2 w-full h-[9rem] pt-1.5`} key={i}>
              {/* 이미지 영역 */}
              <div className={`w-[10rem] h-[7rem] flex justify-start  px-2  items-center`}>
                <div className={`w-full h-[7rem] bg-gray-300 rounded-lg`}></div>
              </div>
              {/* 내용들 영역 */}
              <div className={`w-2/3 flex flex-col items-start pt-2 p-1`}>
                <div className={`font-bold text-gray-700 text-xl h-[1.75rem] w-full bg-gray-300 rounded-full`}></div>
                <div className={`flex gap-2 w-full justify-between h-[1.25rem] bg-blue-300 rounded-full`}>
                  <div className={`text-sm text-gray-700  w-24 h-4 rounded`}></div>
                  <div className={`text-red-500 line-through text-sm px-6  w-24 h-4 rounded`}></div>
                </div>
                <div className={`text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[230px] pt-1.5 rounded-full w-full h-[1.4rem] bg-amber-200`}></div>
              </div>
            </div>
          ))}
          <p className={`mt-4 p-2`}>불러오는 중....</p>
        </div>
      </div>
    </div>
  );
}
