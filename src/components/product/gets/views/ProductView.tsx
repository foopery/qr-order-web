import { SlMagnifier } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { IProductModel } from "../../_interface/product.interface";
import { useEffect, useRef } from "react";
import { navigatorHandler } from "../../../../_common/navigate-handler.ts";

export default function ProductView({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: {
  data: IProductModel[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}) {
  /* 네이게이터 */
  const navigate = navigatorHandler.useNavigator();

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  console.log(data);

  return (
    /* Background Div */
    <div className={`flex flex-col`}>
      {/* Top - div */}
      <div className={`fixed top-0 left-0 right-0 z-10 flex flex-col w-full h-[17vh] border-b bg-white gap-6 shadow-md`}>
        {/* Top 영역중 가게이름과 아이콘 부모 Div */}
        <div className={`flex w-full`}>
          {/* Top --> shop Title Div */}
          <div className={`h-[8vh] w-3/5 flex items-end px-6 text-gray-800 font-bold text-xl`}>가게이름</div>
          {/* 아이콘 배너 */}
          <div className={`h-[8vh] w-2/5 flex justify-end items-end px-6 pb-1 text-gray-800 font-bold text-xl gap-3  `}>
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
      <div className={`flex flex-col w-full pt-[18vh] py-1.5`}>
        {/* 이미지와 내용들을 나누는 div */}
        {data.map((v, i) => (
          <div className={`flex border-b-2 w-full h-[9rem] pt-1.5 cursor-pointer`} onClick={() => navigate(`/product/${v.id}`)} key={i}>
            {/* 이미지 영역*/}
            <div className={`w-[10rem] h-[7rem] flex justify-start mt-1.5 px-2 pt-4 items-center`}>
              <img className={`w-full h-[7rem] mb-2 rounded-lg`} src={v.thumbnailUrl} />
            </div>
            {/* 내용들 영역  */}
            <div className={`w-2/3 flex flex-col items-start pt-2 p-1`}>
              <div className={`font-bold text-gray-700 text-xl h-[1.75rem] w-full flex rounded-full`}>{v.name}</div>
              {/* 할인된 금액이 있는지에 대한 조건 */}
              {v.discountPrice !== "0" ? (
                <>
                  <div className={`flex gap-2 w-full justify-between h-[1.25rem] rounded-full`}>
                    <div className={`text-sm text-gray-700 `}>{String(Number(v.mainPrice) - Number(v.discountPrice)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                    <div className={`text-red-500 line-through text-sm px-6`}>{v.mainPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>

                    {/*<div className={`text-red-500 text-sm`}>{`(${Math.round((Number(v.discountPrice) / Number(v.mainPrice)) * 100)}% 할인)`}</div>*/}
                  </div>
                </>
              ) : (
                <div className={`text-sm text-gray-700  w-full flex rounded-full h-[1.25rem]`}>{v.mainPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
              )}
              <div className={`text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[230px] pt-1.5 rounded-full h-[1.4rem]`}>{v.content}</div>
            </div>
          </div>
        ))}
        {isFetchingNextPage && <p>Loading...</p>}
        <div id={"observer"} ref={observerRef}></div>
      </div>
    </div>
  );
}
