import ImageScrollTop from '../assets/images/scroll_top.png';

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const ScrollTop = () => {
    return (
        <div className="scroll-top">
            <img src={ImageScrollTop} alt="scroll top" onClick={scrollTop} />
        </div>
    )
}

export default ScrollTop;
