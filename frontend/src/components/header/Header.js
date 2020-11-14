import React from 'react';
import './header.scss';

export const Header = () => {
    return (
        <div className="header">
            <h1>POWER Movement</h1>

            <div class="title-bar hamburger" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
                <button class="menu-icon" type="button" data-toggle></button>
                <h4 class="title-bar-title">Menu</h4>
            </div>

            <div class="hamburger-open hamburger" id="example-animated-menu" data-animate="hinge-in-from-top spin-out">
                <div class="top-bar-left">
                    <h4 class="title-bar-title">Menu</h4>
                    <ul class="dropdown menu vertical" data-dropdown-menu>
                        <li class="menu-text"><a href="#">Homepage</a></li>
                        <li class="menu-text"><a href="#">About us</a></li>
                        <li class="menu-text"><a href="#">Sign In</a></li>
                    </ul>
                </div>
            </div>

            {/* TODO: add horizontal menu for desktop */}
            {/* <div class="top-bar" id="example-animated-menu" data-animate="hinge-in-from-top spin-out">
                <div class="top-bar-left">
                    <h4 class="title-bar-title">Menu</h4>
                    <ul class="dropdown menu vertical" data-dropdown-menu>
                        <li class="menu-text"><a href="#">Homepage</a></li>
                        <li class="menu-text"><a href="#">About us</a></li>
                        <li class="menu-text"><a href="#">Sign In</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}
