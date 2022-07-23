import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './BottomNavigation.css';

const BottomNavigation = () => {
    const [page, setPage] = useState('home')
    const clickHandler = (e, page) => {
        // e.preventDefault();
        setPage(page)
    }
    return (
        <footer className="un-bottom-navigation filter-blur">
            <div className="em_body_navigation border-0 -active-links">
                <div className="item_link">
                    <Link to="/" onClick={(e) => clickHandler(e,'home')} className={`btn btn_navLink ${page === 'home' ? 'visited active' : ''}`} aria-label="btnNavigation">
                        <div className="icon_current">
                            <i className="ri-home-5-line"></i>
                        </div>
                        <div className="icon_active">
                            <i className="ri-home-5-fill"></i>
                        </div>
                    </Link>
                </div>
                <div className="item_link">
                    <Link to="/about" onClick={(e) => clickHandler(e,'dashboard')} className={`btn btn_navLink ${page === 'dashboard' ? 'visited active' : ''}`} aria-label="btnNavigation">
                        <div className="icon_current">
                            <i className="ri-search-2-line"></i>
                        </div>
                        <div className="icon_active">
                            <i className="ri-search-2-fill"></i>
                        </div>
                    </Link>
                </div>
                <div className="item_link">
                    <button type="button" name="uploadItem" aria-label="uploadItem"
                        className="btn btn_navLink without_active" data-bs-toggle="modal" data-bs-target="#mdllUploadItem">
                        <div className="btn btnCircle_default">
                            <i className="ri-add-line"></i>
                        </div>
                    </button>
                </div>
                <div className="item_link">
                    <Link to="/" onClick={(e) => clickHandler(e,'settings')} className={`btn btn_navLink ${page === 'settings' ? 'visited active' : ''}`} aria-label="btnNavigation">
                        <div className="icon_current">
                            <i className="ri-heart-3-line"></i>
                        </div>
                        <div className="icon_active">
                            <i className="ri-heart-3-fill"></i>
                        </div>
                    </Link>
                </div>
                <div className="item_link">
                    <Link to="/about" onClick={(e) => clickHandler(e,'line')} className={`btn btn_navLink ${page === 'line' ? 'visited active' : ''}`} aria-label="btnNavigation">
                        <div className="icon_current">
                            <i className="ri-user-4-line"></i>
                        </div>
                        <div className="icon_active">
                            <i className="ri-user-4-fill"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default BottomNavigation;