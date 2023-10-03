import dayjs from 'dayjs';

const formatDate = (date, format = 'YYYY/MM/DD') => {
    if (!date) return '';

    return dayjs(date).format(format);
}

const BlogItem = (item) => {
    return (
        <div className="blog__item" key={item.id}>
            <div className="blog__item__image">
                <img src={item.image} alt="food" />
            </div>
            <div className="blog__item__info">
                <p className="datetime">{formatDate(item.date, 'YYYY.MM.DD HH:MM')}</p>
                <h4>{item.title}</h4>
                <div className="tags">
                    {item.tags && item.tags.map((tag, index) => <span className="tag__item" key={index}>#{tag}</span>)}
                </div>
            </div>
        </div>
    )
}

export default BlogItem;
