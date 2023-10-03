import dayjs from 'dayjs';

const formatDate = (date, format = 'YYYY/MM/DD') => {
    if (!date) return '';

    return dayjs(date).format(format);
}

const formatType = (type) => {
    const labels = ['', 'Morning', 'Lunch', 'Dinner', 'Snack']

    return labels[type];
}

const FootItem = (item) => {
    return (
        <div className="food__item" key={item.id}>
            <div className="food__item__image">
                <img src={item.image} alt="food" />
            </div>
            <div className="food__item__info">
                <p>{formatDate(item.date, 'MM.DD')}.{formatType(item.type)}</p>
            </div>
        </div>
    )
}

export default FootItem;
