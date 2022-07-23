import React from 'react';
import UserIcon from '../icons/user.png'

const HeaderNavigation = () => {

    return (
        <header className="default heade-sticky">
            <div className="un-title-page">
                <h1><span style={{ color: 'var(--gray-300)' }}>fiistore</span><span className="color-purple size-15">.io</span></h1>
            </div>
            <div className="un-block-right">
                <div className="un-notification">
                    <a href="/" aria-label="activity">
                        <i className="ri-notification-line"></i>
                    </a>
                    <span className="bull-activity"></span>
                </div>
                <div className="un-user-profile">
                    <a href="/" aria-label="profile">
                        <picture>
                            {/* <source srcset="images/avatar/11.webp" type="image/webp" /> */}
                            <img className="img-avatar" src={UserIcon} alt="" />
                        </picture>
                    </a>
                </div>
                
                <div className="menu-sidebar">
                    <button type="button" name="sidebarMenu" aria-label="sidebarMenu" className="btn"
                        data-bs-toggle="modal" data-bs-target="#mdllSidebar-connected">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="9.3" viewBox="0 0 19 9.3">
                            <g id="Group_8081" data-name="Group 8081" transform="translate(-329 -37)">
                                <rect id="Rectangle_3986" data-name="Rectangle 3986" width="19" height="2.3"
                                    rx="1.15" transform="translate(329 37)" fill="#222032" />
                                <rect id="Rectangle_3987" data-name="Rectangle 3987" width="19" height="2.3"
                                    rx="1.15" transform="translate(329 44)" fill="#222032" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderNavigation;