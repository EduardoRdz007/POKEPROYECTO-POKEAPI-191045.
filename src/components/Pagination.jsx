import "../styles/pagination.css";

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages, onFirstClick, onFinalClick} = props;

    return (
        <div className="pagination">
            <button className="pagination-btn" onClick = {onFirstClick}>
                <div className="icon">
                    <span role="img" aria-label="right">
                    ⏪ 
                    </span>
                </div>
            </button>
            <button className="pagination-btn" onClick = {onLeftClick}>
                <div className="icon">
                    <span role="img" aria-label="left">
                    ◀️
                    </span>
                </div>
            </button>
            <div className="text-pagination">{page} de {totalPages}</div>
            <button className="pagination-btn" onClick = {onRightClick}>
                <div className="icon">
                    <span role="img" aria-label="right">
                    ▶️
                    </span>
                </div>
            </button>
            <button className="pagination-btn" onClick = {onFinalClick}>
                <div className="icon">
                    <span role="img" aria-label="right">
                    ⏩
                    </span>
                </div>
            </button>
        </div>
    )
}

export default Pagination