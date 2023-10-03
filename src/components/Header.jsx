import { useState, useEffect, } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import IconMemo from '../assets/images/icons/icon_memo.png';
import IconChallenge from '../assets/images/icons/icon_challenge.png';
import IconInfo from '../assets/images/icons/icon_info.png';
import IconMenu from '../assets/images/icons/icon_menu.png';
import IconClose from '../assets/images/icons/icon_close.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notification, setNotification] = useState([
        {
            id: 1,
            title: 'タイトル',
            content: '内容',
            status: 0
        },
    ]);

    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">
                        <img src={Logo} alt='Logo' />
                    </Link>
                </div>

                <div className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to='/record'>
                                <img src={IconMemo} alt='icon' />
                                <span>自分の記録</span>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/'>
                                <img src={IconChallenge} alt='icon' />
                                <span>チャレンジ</span>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link to='/'>
                                <img src={IconInfo} alt='icon' />
                                <span className='bag_notification'>{notification.length}</span>
                                <span>お知らせ</span>
                            </Link>
                        </li>
                        <li
                            className='nav__item nav__item-menu'
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <img
                                src={menuOpen ? IconClose : IconMenu}
                                alt='icon'
                            />
                        </li>
                    </ul>

                    {menuOpen &&
                        <ul className='menu'>
                            <li>
                                <Link to='/record'>自分の記録</Link>
                            </li>
                            <li>
                                <Link to='/'>体重グラフ</Link>
                            </li>
                            <li>
                                <Link to='/'>目標</Link>
                            </li>
                            <li>
                                <Link to='/'>選択中のコース</Link>
                            </li>
                            <li>
                                <Link to='/column'>コラム一覧</Link>
                            </li>
                            <li>
                                <Link to='/'>設定</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
