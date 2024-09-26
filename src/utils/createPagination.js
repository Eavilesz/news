export function createPagination(totalPages, currentPage) {
  let pagination = [];

  pagination.push(1);

  if (totalPages <= 5) {
    for (let i = 2; i <= totalPages; i++) {
      pagination.push(i);
    }
  } else {
    if (currentPage > 3) {
      pagination.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }

    if (currentPage < totalPages - 2) {
      pagination.push('...');
    }

    pagination.push(totalPages);
  }

  return pagination;
}
