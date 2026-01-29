import { useEffect, useState } from 'react';

const usePagination = (data = [], perPage = 10) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(data.length / perPage);
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const currentData = data.slice(start, end);

    const goFirst = () => setCurrentPage(1);
    const goLast = () => setCurrentPage(totalPage);
    const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
    const goNext = () => setCurrentPage((p) => Math.min(p + 1, totalPage));

    useEffect(() => {
        if (currentPage > totalPage) {
            setCurrentPage(1);
        }
    }, [data, totalPage, currentPage]);

    return {
        currentPage,
        totalPage,
        currentData,
        setCurrentPage,
        goFirst,
        goPrev,
        goNext,
        goLast,
    };
};

export default usePagination;
