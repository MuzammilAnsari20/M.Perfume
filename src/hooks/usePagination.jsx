import { useState } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => setCurrentPage(page);
  const goNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    goNext,
    goPrev,
  };
}

export default usePagination;