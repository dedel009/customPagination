import "./pagination.css";

interface pageType {
  //페이지 관련 타입
  limit: number;
  page: number;
  setPage: Function;
  blockNum: number;
  setBlockNum: Function;
  counts: number;
}

function Pagination({
  limit,
  page,
  setPage,
  blockNum,
  setBlockNum,
  counts,
}: pageType) {
  const createArr = (num: number) => {
    //새로운 배열을 만들기 위한 함수
    const iArr: number[] = new Array(num);
    for (let i = 0; i < num; i++) iArr[i] = i + 1;
    return iArr;
  };
  const pageLimit = 10; //보여줄 페이지네이션 개수
  const totalPage: number = Math.ceil(counts / limit); //전체 페이지 수
  const blockArea: number = Number(blockNum * pageLimit); //화면 전환 시 보여줄 페이지 수
  const nArr = createArr(Number(totalPage)); //nArr 함수에 전체 페이지 수를 배열로 세팅
  let pArr = nArr?.slice(blockArea, Number(pageLimit) + blockArea); //페이지 구역을 nArr 함수에 slice하여 원하는 페이지 block만 보여줄 수 있도록 설정

  function firstPage() {
    //맨처음 페이지로
    setPage(1);
    setBlockNum(0);
  }
  function prevPage() {
    //이전 페이지로
    if (page > 1) {
      if (page - 1 <= pageLimit * blockNum) {
        //최소 페이지일 때(11, 22, ...) blockNum - 1
        setBlockNum((num: number) => num - 1);
      }
      setPage((num: number) => num - 1); //현재 페이지 - 1
    }
  }

  function nextPage() {
    //다음 페이지로
    if (page < totalPage) {
      if (pageLimit * Number(blockNum + 1) < Number(page + 1)) {
        //최대 페이지일 때(10, 20, ...) blockNum + 1
        setBlockNum((num: number) => num + 1);
      }
      setPage((num: number) => num + 1); //현재 페이지 + 1
    }
  }

  function lastPage() {
    //맨마지막 페이지로
    setPage(totalPage);
    setBlockNum(Math.ceil(totalPage / pageLimit) - 1);
  }

  return (
    <>
      <div className="ListPagenationWrapper">
        <button
          className="moveToFirstPage"
          onClick={() => {
            firstPage();
          }}
          aria-label="Previous"
        >
          &lt;&lt;
        </button>

        <button
          className="moveToPreviousPage"
          onClick={() => {
            prevPage();
          }}
          aria-label="Previous"
        >
          &lt;
        </button>
        <div className="paginationWrap">
          {pArr.map((num: number) => (
            <button
              key={num}
              onClick={() => {
                setPage(num);
              }}
              className={page === num ? "pageBtn page" : "page"}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          className="moveToNextPage"
          onClick={() => {
            nextPage();
          }}
        >
          &gt;
        </button>

        <button
          className="moveToLastPage"
          onClick={() => {
            lastPage();
          }}
        >
          &gt;&gt;
        </button>
      </div>
    </>
  );
}

export default Pagination;
