import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../icons/dashboard.png';
import Plus from '../icons/plus.png';
import User from '../icons/user.png';
import Notification from '../icons/notification.png';
import Menu from '../icons/menu.png';
import './BottomBar.css';

const BottomBar = () => {
    const [page, setPage] = useState('home')
    const clickHandler = (e, page) => {
        // e.preventDefault();
        setPage(page)
    }
    return (
        <nav>
            <ul>
                <li className={page === 'home' ? 'active' : ''}><Link to="/" onClick={(e) => clickHandler(e,'home')}><span>abbackr</span><img src={User} alt=""/></Link></li>
                <li className={page === 'invoice' ? 'active' : ''}><Link to="/about" onClick={(e) => clickHandler(e,'invoice')}><span>Accueil</span><img src={Dashboard} alt=""/></Link></li>
                <li className={page === 'plus' ? 'active' : ''}>
                    <Link to="/" onClick={(e) => clickHandler(e,'plus')}>
                        <span>commande</span>
                        <img src={Plus} alt=""/>
                        <span className="label sale">Sale</span>
                    </Link>
                </li>
                <li className={page === 'setting' ? 'active' : ''}>
                    <Link to="/" onClick={(e) => clickHandler(e,'setting')}>
                        <span>Notofication</span>
                        <img src={Notification} alt="" width="30"/>
                        <span className="label cart">6</span>
                    </Link>
                </li>
                <li className={page === 'line' ? 'active' : ''}><Link to="/about" onClick={(e) => clickHandler(e,'line')}><span>Plus</span><img src={Menu} alt="" /></Link></li>
            </ul>
        </nav>
    );
}

export default BottomBar;