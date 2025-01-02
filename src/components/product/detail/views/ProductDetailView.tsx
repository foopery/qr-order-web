import { IProductModel } from "../../_interface/product.interface.ts";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

export default function ProductDetailView({ data }: { data: IProductModel }) {
  /* 수량 상태 */
  const [count, setCount] = useState(1);
  /* 옵션 상태 */
  const [selectOptions, setSelectOptions] = useState<number[]>([]);
  /* 최종결제 계산 */
  const totalPrice = data.isDiscount && data.discountPrice !== "0" ? Number(data.mainPrice) - Number(data.discountPrice) : Number(data.mainPrice);
  /* 옵션합 계산 */
  const optionsPrice = selectOptions.reduce((acc, price) => acc + price, 0);
  /* 최종수량 + 옵션 가격 합산 */
  const totalAmount = totalPrice * count + optionsPrice;

  /* 옵션을 선택했을 때와 해제했을 때의 함수  */
  const optionsHandler = (price: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectOptions((value) => [...value, price]);
    } else {
      setSelectOptions((value) => value.filter((v) => v !== price));
    }
  };

  return (
    /* Back Div */
    <div className={`w-full h-auto flex flex-col bg-white`}>
      <div>
        {/* Top Div */}
        <div className={`fixed top-0 left-0 right-0 z-10 flex flex-col w-full h-auto border-b bg-white shadow-md`}>
          <div className={`h-[8vh] w-full flex items-center justify-between px-4 text-gray-800 font-bold text-xl `}>
            <SlArrowLeft />
            <FiShoppingCart />
          </div>
        </div>
      </div>
      {/* Center div */}
      <div className={` flex-grow flex flex-col  border-b gap-2 bg-gray-100`}>
        <div className={`bg-white`}>
          {/* Image Div*/}
          <div className={`pt-[5rem] flex justify-center`}>
            <img className={`h-[12rem] w-full object-cover`} src={data.thumbnailUrl} alt="" />
          </div>
          {/* info div */}
          <div>
            {/* Name Div */}
            <div className={`flex px-3 py-3 text-gray-800  text-2xl font-semibold`}>{data.name}</div>
            {/* Quantity div */}
            {data.isQuantity ? (
              <>
                <div className={`flex  px-3 text-sm text-gray-700 gap-1 `}>
                  <span className={``}>남은수량</span>
                  <span className={`text-left `}>{data.quantity}개</span>
                </div>
              </>
            ) : (
              <></>
            )}
            {/* Price Div */}
            {data.isDiscount && data.discountPrice !== "0" ? (
              <>
                <div className={`flex px-3 items-center gap-4`}>
                  <div className={`line-through text-sm font-semibold text-gray-400 `}> {data.mainPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                </div>
                <div className={`flex px-3 text-lg  font-bold text-red-600 `}>
                  {String(Number(data.mainPrice) - Number(data.discountPrice)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className={`text-lg text-gray-700 px-4 w-full flex rounded-full h-[1.25rem]`}>{data.mainPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                </div>
              </>
            )}
            {/* Content Div*/}
            <div className={`py-3 px-4 text-gray-800  text-sm text-left`}>{data.content}</div>
          </div>
        </div>
        {/* Options */}
        {/* 필수부분 */}
        {data.optionGroups.map((v, i) => (
          <>
            {v.type === 1 ? (
              <div className={`mt-2 w-full h-auto bg-white`} key={i}>
                <div className={`flex flex-col`}>
                  <div className={`flex items-center justify-between gap-[15rem] p-3 w-full h-[3rem]`}>
                    <span className={`text-lg font-semibold`}>{v.title}</span>
                    <div className={`flex justify-center items-center w-[2.5rem]  h-[1.5rem] rounded-full text-xs bg-sky-100 text-blue-500 font-semibold`}>필수</div>
                  </div>
                  <div className={`flex w-full px-4`}>
                    <span className={`text-xs text-gray-500`}>최대 1개 선택</span>
                  </div>
                </div>
                {v.options.map((options) => (
                  <div className={`flex  justify-starts items-center  p-3`} key={options.id}>
                    <input
                      type="radio"
                      id={`option-${v.id}-${options.id}`}
                      name={`group-${v.id}`}
                      className={`hidden`}
                      onChange={() => optionsHandler(Number(options.price), true)}
                    />
                    <label htmlFor={`option-${v.id}-${options.id}`} className={`flex items-center cursor-pointer relative w-full gap-2`}>
                      <div className={`w-[1rem] h-[1rem]  rounded-full bg-white border-2 flex items-center justify-center`}>
                        <div className={`w-[0.5rem] h-[0.5rem] justify-center items-center bg-gray-600 rounded-md hidden`} id="checkmark"></div>
                      </div>
                      <div className={`w-full`}>
                        <div className={`flex justify-between`}>
                          <span className={`ml-2`}>{options.value}</span>
                          <span className={`font-semibold mr-2`}>+{options.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        </div>
                      </div>
                    </label>
                    <style>{`
              input[type="radio"]:checked + label > div > #checkmark {
                display: block;
              }
            `}</style>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`mt-2 w-full h-auto bg-white`} key={i}>
                <div className={`flex flex-col`}>
                  <div className={`flex items-center justify-between gap-[15rem] p-3 w-full h-[3rem]`}>
                    <span className={`text-lg font-semibold`}>{v.title}</span>
                    <div className={`flex justify-center items-center w-[2.5rem]  h-[1.5rem] rounded-full text-xs bg-gray-200 text-gray-500 font-semibold`}>선택</div>
                  </div>
                  <div className={`flex w-full px-4`}>
                    <span className={`text-xs text-gray-500`}>최소 1개 선택</span>
                  </div>
                  {v.options.map((options) => (
                    <>
                      <div className={`flex  justify-starts items-center p-3`} key={options.id}>
                        <input
                          type="checkbox"
                          id={`option-checkbox-${options.id}`}
                          className={`hidden`}
                          onChange={(e) => optionsHandler(Number(options.price), e.target.checked)}
                        />
                        <label htmlFor={`option-checkbox-${options.id}`} className={`flex items-center cursor-pointer relative w-full gap-2`}>
                          <div className={`w-[1.1rem] h-[1.1rem] rounded-md bg-white border-2 flex items-center justify-center`}>
                            <div className={`w-[0.5rem] h-[0.5rem] bg-gray-600 rounded-md hidden`} id="checkmark"></div>
                          </div>
                          <div className={`w-full`}>
                            <div className={`flex justify-between`}>
                              <span className={`ml-2`}>{options.value}</span>
                              <span className={`font-semibold mr-2`}>+{options.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                            </div>
                          </div>
                        </label>
                        <style>{`
              input[type="checkbox"]:checked + label > div > #checkmark {
                display: block;
              }
            `}</style>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
        {/* 수량 */}
        <div className={`bg-white w-full h-auto mt-2`}>
          <div className={`flex p-3 h-[5rem] items-center justify-between`}>
            <span className={`text-lg font-semibold text-gray-700`}>수량</span>
            <div className={`flex gap-10 justify-center  items-center border-2 rounded-md w-[12rem] h-[3.5rem]`}>
              <FiMinus className={`text-lg ${count === 1 ? `text-gray-400 cursor-not-allowed` : ""}`} onClick={() => count > 1 && setCount(count - 1)} />
              <span className={`text-lg min-w-[2rem] text-center`}>{count}개</span>

              <FiPlus className={`text-lg`} onClick={() => setCount(count + 1)} />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={`flex w-full  h-[5rem] bg-white`}>
        <div className={`flex  p-2 w-full items-center`}>
          <div className={`flex flex-col  items-start justify-center h-[2.5rem] w-full text-left `}>
            <span className={`text-xs text-gray-500 w-full`}>결제 최종금액</span>
            <span className={`text-sm text-gray-800 w-full`}>{totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
          </div>
          <div className={`flex gap-3 w-full`}>
            {/* 장바구니 담기 div */}
            <div className={`flex`}>
              <button className={`w-[8.5rem] h-[2.5rem] bg-white rounded-md border border-[#4285f4] text-[#4285f4] font-bold`}>장바구니 담기</button>
            </div>
            {/* 바로주문 div */}
            <div className={`flex`}>
              <button className={`w-[8.5rem] h-[2.5rem] bg-[#4285f4] rounded-md text-white font-bold`}>바로주문</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
