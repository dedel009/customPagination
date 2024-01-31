import React, { useEffect, useState } from "react";
import Pagination from "./pagination";

function App() {
  //페이지 관련 상태
  const [limit] = useState(10); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); //페이지 초기 값 1

  const [counts, setCounts] = useState(1); // 데이터의 총 개수
  const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 상태. 초기값은 0

  useEffect(() => {
    setCounts(100);
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <p>현재페이지 : {page}</p>
      </header>
      <Pagination
        limit={limit}
        page={page}
        setPage={setPage}
        blockNum={blockNum}
        setBlockNum={setBlockNum}
        counts={counts}
      />
    </div>
  );
}

export default App;
