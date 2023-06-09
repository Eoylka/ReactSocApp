import s from "./FindFrindes.module.css";
import btnL from "../../img/btn/BtnL.svg";
import btnR from "../../img/btn/BtnR.svg";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 4,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let sectionCount = Math.ceil(pagesCount / portionSize);
  let currentSection = Math.ceil(currentPage / portionSize);

  let leftPortionPageNumber = (currentSection - 1) * portionSize + 1;
  let rightPortionPageNumber = Math.min(
    currentSection * portionSize,
    pagesCount
  );

  return (
    <div className={s.pagination}>
      {currentSection > 1 && (
        <button
          className={s.btnLeft}
          onClick={() => {
            onPageChanged(leftPortionPageNumber - 4);
          }}
        >
          <img src={btnL} className={s.ImgBtn} alt="" />
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? s.selectedPage : s.unselectdePage}
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {currentSection < sectionCount && (
        <button
          className={s.btnRight}
          onClick={() => {
            onPageChanged(rightPortionPageNumber + 1);
          }}
        >
          <img src={btnR} className={s.ImgBtn} alt="" />
        </button>
      )}
    </div>
  );
};

export default Paginator;
