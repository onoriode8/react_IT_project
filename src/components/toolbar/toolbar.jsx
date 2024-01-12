import { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";

import { context } from '../../hooks/context';

import logo from '../../assests/logo.jpg'

import './toolbar.css';

const Toolbar = () => {
    const {  menuBar, menuHandler } = useContext(context);

    return (
    <div>
        {menuBar ? <div>
            <aside>
              <ul className="aside_link">
                    <li><a href='/' title="Home">Home</a></li>
                    <li><a href='/buy' title="Buy">Buy</a></li>
                    <li><a href='/sell' title="Sell">Sell</a></li>
                    <li><a href='/rent' title="Rent">Rent</a></li>
                    <li><a href='/home_loans' title="Home Loans">Home Loans</a></li>
                    <li><a href='/mortgage_rent' title="Mortgage Rent">Mortgage Rent</a></li>
                </ul>
            </aside>
        </div> : null }
        <header>
            <nav>
                <span><img className="menu_logo" src={logo} alt="" /></span>
                <ul>
                    <li><a className='list_a'   href='/' title="Home">Home</a></li>
                    <li><a className='list_a' href='/buy' title="Buy">Buy</a></li>
                    <li><a className='list_a' href='/sell' title="Sell">Sell</a></li>
                    <li><a className='list_a' href='/rent' title="Rent">Rent</a></li>
                    <li><a className='list_a' href='/home_loans' title="Home Loans">Home Loans</a></li>
                    <li><a className='list_a' href='/mortgage_rent' title="Mortgage Rent">Mortgage Rent</a></li>
                </ul>
                <div className="menu" onClick={menuHandler}><CiMenuBurger /></div>
            </nav>
        </header>
    </div>
);
    }

export default Toolbar;