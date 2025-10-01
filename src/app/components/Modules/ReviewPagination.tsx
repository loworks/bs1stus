import { IconNext, IconPrev } from "../Atoms/SvgElements";

// components/ReviewPagination.tsx
type ReviewPaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  className?: string;
  onPageChange: (page: number) => void;
};

const ReviewPagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}: ReviewPaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // レビューが0の場合、ページネーションを表示しない
  if (totalItems === 0) {
    return null;
  }

  const isSinglePage = totalPages === 1;

  return (
    <div
      className={`pagination flex items-center justify-end gap-[2vw] [&_*]:block ${className}`}
    >
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1 || isSinglePage}
        className={isSinglePage ? "cursor-not-allowed opacity-20" : ""}
      >
        <IconPrev className="max-md:[&_svg]:w-[6vw] md:[&_svg]:w-[3vw] " />
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages || isSinglePage}
        className={isSinglePage ? "cursor-not-allowed opacity-20" : ""}
      >
        <IconNext className="max-md:[&_svg]:w-[6vw] md:[&_svg]:w-[3vw] " />
      </button>
      <span className=" mr-[1.2vw] block w-[70px] text-right text-[14px] ">
        Page {currentPage} / {totalPages}
      </span>
    </div>
  );
};

export default ReviewPagination;
