const Pagination = ({ currentPage, totalPage, onPrev, onNext, onPage }) => {
    return (
        <ul className="pagination">
            <li>
                <a
                    href="#"
                    className={currentPage === 1 ? 'disabled' : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        onPrev();
                    }}
                >
                    이전
                </a>
            </li>

            {[...Array(totalPage)].map((_, i) => {
                const page = i + 1;
                return (
                    <li key={page}>
                        <a
                            href="#"
                            className={currentPage === page ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                onPage(page);
                            }}
                        >
                            {page}
                        </a>
                    </li>
                );
            })}

            <li>
                <a
                    href="#"
                    className={currentPage === totalPage ? 'disabled' : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        onNext();
                    }}
                >
                    다음
                </a>
            </li>
        </ul>
    );
};

export default Pagination;
