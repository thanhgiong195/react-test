import dayjs from 'dayjs';

const formatDate = (date, format = 'YYYY/MM/DD') => {
    if (!date) return '';

    return dayjs(date).format(format);
}

const DiaryItem = (item) => {
    return (
        <div className="diary__item" key={item.id}>
            <div className="diary__item__info">
                <p className="date">{formatDate(item.date, 'YYYY.MM.DD')}</p>
                <p className="time">{formatDate(item.date, 'HH:MM')}</p>
                <div className="content">私の日記の記録が一部表示されます。<br />
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
            </div>
        </div>
    )
}

export default DiaryItem;
