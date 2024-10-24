import { useSelector } from "react-redux";



function Dashboard() {
  const list = useSelector((state) => state.list);

  const renderList = list.map((item) => (
    <div key={item.id} className=" lg:w-[10rem] lg:h-[9rem] md:w-[10rem] md:h-[15rem] sm:w-[6rem] sm:h-[18rem] rounded-[20px] border-[1px] p-2 text-black flex-wrap">
      <h3 className="font-[500] text-[14px] leading-4 text-center mt-2 mr-[22px] text-nowrap">{item.title}</h3>
      <p className="font-[700] text-[24px] leading-7 mt-4 pl-4">{item.percentage.Score}</p>
      {item.percentage.Graph && item.percentage.Graph !== "" ? (
        <img className="w-[144px] h-[33px] mt-2 text-center" src={item.percentage.Graph} alt="item.title" />
      ) : null}
    </div>
  ))

  const range = useSelector((state) => state.range);

  const renderRange = range.map((i) => (
    <div key={i.Topic} >
      <h2 className="font-[600] m-3 text-[14px] leading-4 text-gray-400 dark:text-gray-500">{i.heading}</h2>
      <div class="flex  w-full ">
        <div className="w-[49px], h-[32px] rounded-md p-3 m-2" ><img src={i.otherInfo.photo} alt="image" /></div>
        <div className="flex flex-col">
          <p className="font-[700] text-[14px] leading-5 text-black m-1">{i.otherInfo.Topic}</p>
          <div className="w-[299px] rounded-2xl  bg-[#FFBF1A]"><div className="rounded-[100px] w-[70%]" style={{ background: 'linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)' }}>  <span className="text-white">.</span>{i.otherInfo.color}</div></div>
        </div>
        <div className="flex items-end justify-end m-2 gap-2 ">
          <p className="font-[600] text-[14px] leading-4 text-black"> {i.otherInfo.rate}</p>
          <p className="font-[600] text-[14px] leading-4 text-gray-500">{i.otherInfo.score}</p>
        </div>
      </div>
    </div>
  ))

  const range2 = useSelector((state) => state.range2);
  const renderRange2 = range2.map((p) => (
    <div key={p.Topic} >
      <h2 className="font-[600] m-3 text-[14px] leading-4 text-gray-400 dark:text-gray-500">{p.heading}</h2>
      <div class="flex  w-full ">
        <div className="w-[49px], h-[32px] rounded-md p-3 m-2" ><img src={p.otherInfo.photo} alt="image" /></div>
        <div className="flex flex-col">
          <p className="font-[700] text-[14px] leading-5 text-black m-1">{p.otherInfo.Topic}</p>
          <div className="w-[299px] rounded-2xl  bg-[#b7e1a3]"><div className="rounded-[100px] w-[70%]" style={{ background: 'linear-gradient(143.13deg, #2FEA9B 5.36%, #7FDD53 94.64%)' }}>  <span className="text-white">.</span>{p.otherInfo.color}</div></div>
        </div>
        <div className="flex items-end justify-end m-2 gap-2 ">
          <p className="font-[600] text-[14px] leading-4 text-black"> {p.otherInfo.rate}</p>
          <p className="font-[600] text-[14px] leading-4 text-gray-500">{p.otherInfo.score}</p>
        </div>
      </div>
    </div>
  ))


  const tableGraph = useSelector((state) => state.tableGraph);

  const renderTable = tableGraph.map((item) => {
    const Months = item.xValues;
    const Values = item.yValues;
    const Bars = item.barColors;

    const ListMonths = Months.map((month, index) => (
      <div key={index}>{month}</div>
    ));
    const ListBars = Bars.map((b, index) => (
      <div key={index}>{b}</div>
    ));

    const ListValues = Values.map((value, index) => (
      <div key={index}>{value}</div>
    ));

    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-2">
          <div>{item.header.h}</div>
          <div>
            <select className="border-none" name="dropdown" >
              <option value="">{item.header.b}</option>
              <option value="vv">vv</option>
              <option value="vv">vv</option>
            </select>
          </div>

        </div>
        <hr className="p-1 w-full m-1" />

        <div className="flex justify-between gap-4">
          {/* Values list */}
          <div className="flex flex-col-reverse gap-4 p-2 mb-5">{ListValues}</div>

          {/* Months and colors */}
          <div className="flex flex-col">
            <div className="flex flex-col justify-evenly gap-2">
              <div className="flex gap-6 h-[210px]" >
                {ListBars && ListBars == '' ? (
                  <div>h</div>
                ) : <div className="flex gap-7  mt-1 p-1 ">
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[20%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[40%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[35%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[65%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[70%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[70%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[55%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[25%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[65%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[75%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[80%] w-[20px] rounded-[100px]">.</div></div>
                  <div className="bg-[#F2F7FF]  h-[full] w-[15px] flex items-end rounded-[100px] "><div className="bg-[linear-gradient(356.64deg,_rgba(27,_89,_248,_0.8)_48.49%,_rgba(27,_89,_248,_0)_282.14%)]  h-[95%] w-[20px] rounded-[100px]">.</div></div>
                </div>}</div>


              <div className="flex gap-3" >{ListMonths}</div>

            </div>
          </div>
        </div>
      </div>
    );
  });

  const customers = useSelector((state) => state.customers);

  const renderCustomers = customers.map((item) => {
    return item.Leaderboard ? (
      <table key={item.title}>
        <thead>
          <tr><th className="font-[600] text-[14px] leading-[18px] text-left p-4 ">{item.title}</th></tr>
        </thead>
        <tbody>
          {item.Leaderboard.map((leader, index) => (
            <tr className="w-[30rem] flex justify-between gap-5 mr-[160px] p-2 items-center" key={index}>
              <tr>
                <td>
                  <div className="flex flex-col gap-2">
                    <p className="text-black font-[600] text-[18px] leading-[18px]">{leader.Company}</p>
                    <p className="text-[#808080] font-[500] text-[14px] leading-[13px]">{leader.Points}</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="flex gap-1 items-center" >
                    {leader.Num}
                    <img className="h-[11px] w-[12px]" src={leader.icon} alt="Icon" />
                  </div>
                </td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  });

  const renderCompany = customers.map((item) => {
    return item.Userboard ? (
      <table key={item.title}>
        <thead>
          <tr className="font-[600] text-[14px] leading-[38px] text-left m-3"><th>{item.title}</th></tr>
        </thead>
        <tbody>
          {item.Userboard.map((user, index) => (
            <tr className="w-[30rem] md:w-[25rem]  sm:w-[20rem] flex justify-between gap-5 mr-[160px] p-2 items-center" key={index}>
              <tr >
                <td>
                  <div className="flex items-center gap-5">
                    <img className="w-[42px] h-[42px]" src={user.img} alt={user.Name} />
                    <div className="flex flex-col">
                      <p className="text-black font-[600] text-[14px] leading-[18px]">{user.Name}</p>
                      <p className="text-gray-500 font-[500] text-[12px] leading-[14px]">{user.points}</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>

                <td>
                  <div className="flex gap-1 items-center">
                    {user.Num}
                    <img className="h-[11px] w-[12px]" src={user.icon} alt="Icon" />
                  </div>
                </td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  });











  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 max-w-[screen]">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-3 sm:gap-6 lg:mb-2 md:mb-4 sm:mb-6">
          <div class="flex lg:items-center md:items-start sm:items-start lg:justify-center md:justify-around sm:justify-around rounded lg:w-[34rem] lg:h-[22rem] md:w-[28rem] md:h-[25rem] sm:w-[8rem] sm:h-[27rem]">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-4 md:gap-3 sm:gap-2 text-2xl text-gray-400 dark:text-gray-500">
              {renderList}
            </div>

          </div>
          <div class="flex  flex-wrap items-center justify-center lg:w-[35rem]  lg:h-[20rem] md:w-[28rem]  md:h-[25rem] sm:w-[18rem]  sm:h-[28rem] border-[1px] rounded-[20px]">
            {renderTable}
          </div>
          <div class="flex  flex-wrap flex-col w-[33rem] h-[17rem] rounded-[20px] bg-[#FFFFFF] border-[#EFF0F6] border-[1px] gap-2">
            {renderRange}
          </div>
          <div class="flex  flex-wrap flex-col w-[33rem] h-[17rem] rounded-[20px] bg-[#FFFFFF] border-[#EFF0F6] border-[1px] gap-2">
            {renderRange2}
          </div>
          <div class="flex flex-wrap  h-[20rem] w-[33rem] rounded-[20px] border-[1px] p-3">
            {renderCustomers}
          </div>

          <div class="flex  flex-wrap h-[20rem] w-[33rem] rounded-[20px] border-[1px] p-2">
            {renderCompany}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
