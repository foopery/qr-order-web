import { SlArrowLeft } from "react-icons/sl";

export default function CartView() {
  return (
    /* Back Div */
    <div className={`w-full h-full flex flex-col`}>
      <div className={``}>
        {/* Top Div */}
        <div className={`fixed top-0 left-0 right-0 z-10 flex flex-col w-full h-auto border-b bg-white shadow-md`}>
          <div className={`h-[8vh] w-full flex items-center justify-between px-4 text-gray-800 font-bold text-xl`}>
            <SlArrowLeft />
          </div>
        </div>
      </div>
      {/* Center Div */}
      <div className={`border-2 w-full flex-grow flex flex-col pt-[8vh] h-auto`}>
        {/* Input Custom */}
        <div className={`flex p-3`}>
          <input type="checkbox" id={`option-checkbox`} className={`hidden`} />
          <label htmlFor={`option-checkbox`} className={`flex items-center cursor-pointer relative w-full gap-4`}>
            <div className={`w-[1.3rem] h-[1.3rem] bg-white border-2 flex items-center justify-center`}>
              <div className={`w-[0.5rem] h-[0.5rem] bg-gray-600 rounded-md hidden`} id="checkmark"></div>
            </div>
            <div className={`w-full`}>
              <div className={`flex`}>
                <span className={`mr-2`}>상품명</span>
              </div>
            </div>
          </label>
          <style>{`
              input[type="checkbox"]:checked + label > div > #checkmark {
                display: block;
              }
            `}</style>
        </div>
        {/* Image Area */}
        <div className={`flex p-2 gap-6 w-full h-auto`}>
          <img
            src="data:image/webp;base64,UklGRoQVAABXRUJQVlA4IHgVAACwVACdASrgAOAAPrFMoUunJCOhqRorAOAWCWZu8p9XgMrDME/bsZ5qoceS+5H3j5D9m3bt1v5V3SHnv/2/rR/sfqC+Nn63vMd+wvqx/7r1z/2P1Bv5v/yOt19ET9uvTi/c/4f/7N/yv219qP//9n/eWua36RtuYD+vTU+7v/M3uK7K+Ac7/tAsI/5nzP+x/sAcC1QC/m394/ZT3j/83yQ/XnsK+XL7NPR9Z44UtkxDzTJxmGCfqbongTK6Ni2ecK+KC9IkqPWOC/ETl9+DGBotYevxeoeYb0X+fxSmTvnXxELYGgwJUPH474ypEBpwxOhpjXOnipxBQJMhpfbvJzfTwG/cs4NFDqnjLyWfYprecQgzalF5redgOOtDmYMXePwL5o0ak+ur7HTvmFkd5l8nfeK6zN82vAeMaNnRx1PLn6VEcxYNRvIMQNX1IJmBPDJug27xb6++2MK3fc++/dS5/IefYSwgch9CxbvDc5rE+wfoPcvo3l0kn0leLJUSUS4tjXMIwybUa4bIrSJd+WG2EJCMsQRfbx3boW10X+qJ04Rr/26/aIGx/7pysqqdP+8Q+gqNKO4Rno7hAysFRBzMaKwaOTDxGjnSpsx/KPuZi6nySRsa0dy9N2q9UI62J1KqnOhcpz7i1hSV9r34m7kfvh3ZgabEWMhyIfTRqFBklbpOCmJNnzdsFNQc/CyME/Tjg4f5Ygi+3jOLJ1LY6pbjyn5Sgi+SYNxb+EkXKonhojZOB5ENdpXIqcQargZqOJaaatO0aNMdjnzMSEXzBeJVx35gAHD73+f3awNEYbiYLiuHiWEjGbkwDTpFpTizBJ8HemXwIiMIRnOv0rvBw/u1gaVwWEXwd70HO04giHW4xDr2OUKlhi26s1NlCsZQO0UPqElO5Xzrv9i8l3N2IAD+/r+A74GiRabyvcRvIM2Rr6jzvqfsqEuyRm2hyB1a6MoI2+YaIM/NnxkelFvKVb+DM41vf/4NXxiwf+YMt1PdsUfaEcXRP1bFY45eulYhK0Tf8ba0dBAoPClfaouzczY+p07eDORRWJjLx70E5Vu77kt3O4p7OVbIR0Coc9zEfxaeT50yWrPMylqPEcvLsfxyUxT8Rtop9vWigYhvjs/HRMP6uZj23O1WQf+yBcY5NMVU672GXabO+qab/OlEngs5lQlp6aKWroI55neADB/neGSw8553Oq4quXehbOKZu5nvKltIxpDDdIlOn2eLDYj35gegdfzle9AT1F74wLp/51yQsmnviW8aDC3rJsiarXfhdds/7QhqhXk9il8kwrqmWQYgdIpU9bgKxOG/W8YpcMwEhTnCRZHsTjgpQZoClIb/bzDEVa93I/Py16pO0Gb16LdE77MGVQq9qh30T5bNvzW442JiPSA+UtHwt6Yafh7khyux78DPISomo6aDxaOKlmh4Ps//VoFv5VQagWGF5i7xsYCKdk34muLNcC2QhXwAe96Fza0NpBjMPtQfQ/elkTA6Us8/qnjCXtSB+DFcG/CmKAGJhpDrBnE4xjLvHWlY2FQfG5fFCtVtLCZhHjJ2Ks/xIX+fcGxIG/3IeM80g0rwmcHYepArGdBNJ0/9YL9s8NQk/gzzIpcpnz8DfGQrp30N70gymSszkaytkBOF8cPjlBZLt8vt2yLyJeoOU1RcA4GGarKvD/z0OGVDG+XKOhOgkFxeWssBGA4XwQtEzCuXiES4j2Sx/OU99wCsrxpVGrlWM63MRYSGbG4rYCxeU0xe/a+CU5tq0abX4zaAJ+S9N4h4zR+KqxmMhF/0hHG5Y+ks/cJ294/iysqcLcbZLwd+dXkj5pnD+rsXd1y/z1xTuur5X0RbLFerkkNfTUV9iYVqSaxV6KSdlqhDDijcvPKUMumBl9lZmCsXhUADIcMHonYqzGkV+fSzvWSxJUrbPxfn7oclthCVWxfoOoV7QGcdVN6VRyfzDoODOdgXBt1ayR1r/zlMrLvkHDTOTHr+5eC2cClCwKEXet57kFGQ3z18oQIAPVzfKInBUz/xYr34SzysY7Agm8R/+yS+v5n5T0Z5dJCl2/webVsTj3K5FNp5VtG7kE8ue8pftFtQPKL3aL9DXqB9SgQc1TqgmkDGtpm7uSnVvteGWcI+tUAPVETOcesXOgkpvIG6iS6+lkUi73K415iIhBebpSHy59T1P0deQCGEWWBTRn1bzvBabU0j7EIepOkVk8juTFJRWYs+kkLoXndjPd78e8GyE29xnwESLuAEQHwLKxafUJr0TdH2NkWK+adpJDddvdxV+6dBSIOnAQKnjUuIsH7sMw2FfWvfRFVhYrP3jJZGxjIqi3pXDyp6CL3oIPeq2AmY2lm7Fc/2wt6GDpoIBekE/3MNlrhZl1FOQ4XfAjXhqePcnwQEduLtChEfT5Ok9h729oOJ+AHv4QpQ5OAm+nSb0ImTRCr6+GoMjygsAb2PG/LXHGAE+Awm4joJGodTMU/zeW3C6Y+x0ZwQjPpEgAOPbKjHNW8e+gT0GgDmv1sNYgan5bjTfqdo+nTFndJ0+uuw32yyRGlRCXCG5Z1JxTiAcLGYZMpMrR2nNiBb4TugUSc/ARwVNRlLLM/znsNk7U+eESFiz/uQ9YcThNKG3sC9Bqr6goDhswK2vnv43Zdv2mJJm4Td2MALfeaVfFUZFgfJv7h0KHGpaR06iOvDecdFu7QzVhAGf2ZSMuF71n13DsTqZuzdSfjTYRHbcNMS8k9bwKmrS+uSargzJIk3m4MkYdSQF9k1lhWyh6cBa81MVjpqfjP+Gc4yiWtReXT9ayNWAm1fGZf1aUyNBxVBg9ZvFRCi7Hy510qvSoHbYXsBz9kbuzT7x3yg4HOPwDis3+1/omjJCpdG9wBYl0mlgAsRMaCY7s7/OKBaopbXf5/Ejia6L6K7wMkts+MnbuMMP7XtupN60/G0HY6XL/PL2BtdsDfTtTURGO3MmkM6xK+LuzemTDjNucioJLGLoiBnir2PFAjJl4P+uh9W3zWPLQvtC8zYJswZju+6YwA+TCd2rc0HqDxZAQZfKV6PowW7FymB8lVX4KA/DttpjopF9F1y03uxZsM5/++KF2BqaSXYWqEHeYUmbbtgpS+pR+bUzfX1OkbHPgx0gH83HPq7SA4ztmQsEn21LWbcD7oRUA00/ItY3cbRbE/xlWc/lq+1I9YkDi/q3tv/4Nz4nRSG1rB/NszbFR/S7LoCQZ8IHOUWzda12bYJ6F/m25d0ThxiJvSLx2NSCnU+AUvaPSrOiPxBkWY/tRmybklkFvvLFcsZXrBYHLvBrBt1x8T7NgCV8xeV4iX2eZ3oFFBy/8Ezx0cdnX3i4witIju1zMgG3JL9NzSb2Dy8Q/i6XIGD7S5gi0oFM4sTgRP7dIARRo7NZnMdx43Y4k/OEhEN9ReMxLMag26IumBXgQOYRTVu2O0XavTPLXrIfm6oa6CVEJCRq+SPy0BhzC7iKkT/UgsHOR4aGc9WVtTy2Aztzd1vE4QskjrPkCa4EZCrDH9Iv4t/EkAUgrOx7LFZ2ouif/jmAaaXqNtxlstt99d0JLd2PVNm/TrmD6EoKhe4RuVEXmjarGokyOMiPT+TP6wF9sslnYXorAn4AT5/JnliA99EnfezI7jm/8AGBZ9lbNul1pXWn20uVyb27xdrpKu8CGqzoIyj6X+BsJsOkm34dos+HSJpeQ5xvywkk+UJpavb51H2ngN76giQppc24urFHXwhEB8is7GTevAmbdysaqTqq5viaG9k2zZ9BqJjBcV7LILja5fH+UR0SbGfuzbneZyT2dq6bBI2HREMxrj+vn1xc8ewaw8yvM8Tx9pmTl4HERQ82MFfiQC+pbjLIBQwMSeBqIMrEhteEz5kxLvRZW2UX0TWKAk6XmtWtmAekU3cnm58ho4FMkmii9FGY/6GYnlSkyLdnbpUEfUKmXOxfV/n0f/uTfn4XfdCeoNovipvuK27kpEc1Hz6+eMN27l5Gic82XURWhWy9DU2hF/fkG+5yAsiBW34LErWHGwIUyjwpwZsxGPGF7OmYBn808MQ8UzV2V/Zg5iAkPUOe63Oec186EIEZFzXmd2XErx1ASdb4hUCMPqJgk3y6j2HZv0YqmQeOQQOkbLqbeOaM/kijLtCjyjTXMSXTEgZmj2xldK1vdd6jg7/zrZGl6YwX6kV/KxGeT2LPMUuhIxBw62ERl3ic2XaQhGM8amPGRlMPb4AqQf4HKS53g5Qp5vAm+pQByADLDrv3K+752I8Wa+a6N56yqYMUdiHyhkFx4HeFAn6PDKzhEY48Uix3pQJR0uaDSN7g/CoLliRDAjkrfayFHdfh5rXqeWm/s78IzCSB9Ipzg0IqXUIrFnCbEuykAwIdiL1riiJ40NPnspX/fu07l+UgBx2beIkUnJtivrzmlEUHZTuJdCviOdLi2z3UoZJhBxiAy2S4MWK5fE7ERwC3Fw6V/G4vBDutprAxBhKp7tYwvVlLjYqv7yByzAKlzs1UeIbIeFD2AJcJslSNF0gGoVmtIvUGCaMQE4JRx/e9O20m1u1EwSAhWE8n84trhQr0+7x8LGuHLOitpiVAQWh0R29h5ij0fdq6mIHwG1FMDrzR092GMbfZCkWGVPQQsMlyT0kAYlxc9lf/ydwNXuAM8ekmsxLzPcxjt5tDBsAaYJnt1APUFhHW6IYDbVJI0GRA2NiEos3wdrLKQETuNLUxrEIzDyw/pbRc3IqvfmDZ4Uw3elwiDwDi4xeRoRWQaX5WjCXsvUdUCR+80yUYE0j0k61yq9Xxrlc/Qz7VMgm9Ikv9EjakqsvxVWZgyp+fHrcfu0MnAI1Elj/Rx5cVdnXmbKhYQ+jzQWvnlQ0/reYsLzfigN9kIP5phL2P1LHXRGcLFr61TF5JUEfDlvOlEwSOBTBGepx1ttjI6rEUUABExJ7Mhqg56JkYC5jWio7+uXJGrazcRQZ0hiOxJaYXHbwGwnIGnXaknMiNKJI8eC1Q2nsZEUsIejNdpQXcRPI7bkrHDfyla5YWIoJP/HAixfDSFyhEhh4Cm1Vn+SGL4f8lc8sj6i5dFhOWY3sucF/65lgvvhSP36yCsYs56Eu5V58G3MY+jKczGNLIP5hwqd+26q7Kca9skpdiLSZdaseuUy+Oizx6Ep5B6oG/KeWjFB5g6mIbT4E6cm84iXsEN2qQaS+YHRKLgDMu73gm2r6SJ29YBcjgb3Bjd19QB57FiGqEzLBE7cb+FbJgrk+p1CrZhFEQlJVtNxnmcbB0NrOg71jMQX9Ts+TB/VycEn00l023OQxMnSeAL4zoR9S+HRy+Yj/fB3Y0c07s37odygDHdqNMpgeOr/gQxbVWzUpSnxbt8H4BWZVOFx38gaMQnrvfoG7hXbvCE4pgwPxaWuCXd44hbcMhuO8OjHgU2XtmMEV0y1OBQMZ3dhmYZzwcq4phL16whepG1VZsVY9WhB64CkFopHv4kn7SE88SdrURodEh8/p/gEUrURuPErUMdQfK+2cUSL5Ci/a2Q7p8XiHSm4ryE146apayzEYmFrlGjOUap/DQiKZocsP76MTvBtdCtR9R8P5tw711lwzMvfxtTLDtWFKl2WPOodUPivGhbLlyxMHqkVN6Potk+cWBbIJO8NJclHTe6AzLG77JqlvXGgo9RtIHe6JbMkvhMYJr9/t/Eh2heuIVIvUmYgK9VKMl9woLLk8LDU5Hj9Lx8vRPLIeJ+xa9iBA3U9Pq7Ar/dH6FewjFh2K7tJb9c/T6PIrpPal2nvBX7K4/V0j4qJlSl6zv5CvruQg6wx0pslBlCVXm8tTeJi4KG1IyaxGn/7eT0xN/hbhPqMRf8Jvywy6u07DF/3ptbfnIjlvjzp0PmUdhR8UjeYyzBJjvKUNLgvlRUyjuUzMn55cvv7ZpTExOF2HB64gv4Y68r2lxKp6+y2Wp1FK/NE5+KTUhQIeWo29jsRR7c8w4G11ipk5k9Y4KGP+AfCAW17AB2OecoBX28GCXnprt9l7RKe+brCGb/R4n7Lg6JSgRmVNQu6xu9C+rwlIcNVCTy23gG+PbNbm3mvsbZyH48AOo5YFzcVW7QuNbpiNkvYd8nmh7YDrd04GJW9dgaQWYedtg5Yt6W+Yl3Ec+E+mCmZKr2fGO3YEaWobZpCnLqxt2DTLpmmbByJQPVY9I7v33fQgK9C5hpunz81g6WCuhbtPD/ttfXHCqV/6Jkaj1ArcnS/iutu+u6G2/kh4MZO8HIU9BPgEyvHWY1dhcGY/qyao7o7aOW20r6UVj3cN+X52bsTQ8P2nvUJU5ArktzHWNbDd4zd/866T3vQ5LgquiyJIa0QAkcObB+tALbL/0G0ZdIKPc+cWsBJBcOV3zcEuaAko2Hhu6OuhVTwlTwqrEAocy+eHmJH0gpkq1cCmWcLQiQtcuAicuVKSCTAsN7cv5glmyq2MnEepsj52FJE9iwSw/cxvOlpeZ/J6pK4oGtb42dyqR8m4qrCT772XmPiPXjjwlL7CZT8sd3Cr0/i+/RsBh8G34CSLFy/muXDxDPIGbfKPkhZn9VHhQIiNL/8k7TEEiw5zY7AkbgFgiMQhP+OK062g5IUFVcJTj7rMM0liR1I4s7I5GzYm4iLmsSMentBZtlSHqkML/qvzbrAbD3h1/YeU0G2SQ5T7sly9MSx7DHSR1PzX/9LRiF5tiU7SIk5qfSDuLFni1+ZMuK6tuq/Fpah1tMxqc88Ii3nOXvPi0iWYR6qMaDLlsA7SJIA7e3YNKSPY8XJ/cqMYGUH6ywA4MSmuUBd3kxS8Z3lBKjyqg01B6x1FNUJXqNDnXNJ9ROKnviEFlgTcvVU+NkPrNcNyOWJ2VF7s75yLH8I6XA5IrOnj4ivj9sJ07o5c86XzZoc5rLBRhR5oLj1kM8DB9F4Wyj6z5XY1F/2K9iftGVt7E+Q+XU2LYVbMfhPvS7Xql0UfChea79FJuB+mN6XWTIEi9Ev2RfxbzRUwS8sEc8KfD12SrARqDZqCx4ULPBQZ3Fx+c3EDLlxkJk6a2EL8l1ViBt3u9nhduo4tET8f4vnxQRYk4ZPi5kcF/xxLZtFpIghViYsSwlAO8hiovX8FAri0YMbFYbLQCKhvsNyWCYnybWWNV0ipmKjjaiI/HEAlpMYwLZm5PJuJZrmM/aRHZw7ae8eEs6woh7QDGcYohbpiqx9FbXSX52CzZsnW2ZE9yjxHZf2C7MyXlY1s0aiYWGl5mHZdwTnaTyyc+ahVe0n+XpEWS9B0co4uY40bv6k95hNTeGgXypgoz85KM+YD4Ihs7lb0T2Ki94N6J9Kx/vwDYmpnZDZu0LRr8LOmo2gImhEWh8AopVaNHuQAAAA="
            alt=""
            className={`h-[6rem] w-[10rem] flex `}
          />
          {/* item 요소들 */}
          <div className={` w-full flex flex-col text-left justify-between`}>
            <span className={`text-sm text-gray-700`}>옵션들</span>
            <div className={`font-semibold`}>10,000원</div>
          </div>
        </div>
      </div>

      {/* Footer Div */}
      <div className={`fixed bottom-0 left-0 right-0 shadow-md w-full h-auto bg-white flex flex-col p-3 border-t-2`}>
        <div className={`flex justify-between w-full h-auto`}>
          <span className={`text-sm text-gray-700`}>주문할 총 금액 확인하기</span>
          <span>10,000원</span>
        </div>
        <div className={`bg-emerald-500 flex items-center justify-center h-auto mt-3 w-full`}>
          <button className={`w-full h-[3rem] flex items-center justify-center bg-[#4285f4] text-white`}>총 ??개 상품 주문하기</button>
        </div>
      </div>
    </div>
  );
}
