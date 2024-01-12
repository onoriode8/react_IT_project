import { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from 'react-router-dom'

import { context } from '../../hooks/context';

import logo from '../../assests/logo.jpg'

import './toolbar.css';

const Toolbar = () => {
    const {  menuBar, menuHandler, menuFalseHandler } = useContext(context);

    return (
    <div>
        {menuBar ? <div>
            <aside>
              <ul className="aside_link" onClick={menuFalseHandler}>
                    <li><NavLink to='/' title="Home">Home</NavLink></li>
                    <li><NavLink to='/buy' title="Buy">Buy</NavLink></li>
                    <li><NavLink to='/sell' title="Sell">Sell</NavLink></li>
                    <li><NavLink to='/rent' title="Rent">Rent</NavLink></li>
                    <li><NavLink to='/home_loans' title="Home Loans">Home Loans</NavLink></li>
                    <li><NavLink to='/mortgage_rent' title="Mortgage Rent">Mortgage Rent</NavLink></li>
                </ul>
            </aside>
        </div> : null }
        <header>
            <nav>
                <span><img className="menu_logo" src={logo} alt="" /></span>
                <ul>
                    <li><a className='list_a' href='/' title="Home">Home</a></li>
                    <li><NavLink to='/buy' title="Buy" className='list_a'>Buy</NavLink></li>
                    <li><NavLink to='/sell' title="Sell" className='list_a'>Sell</NavLink></li>
                    <li><NavLink to='/rent' title="Rent" className='list_a'>Rent</NavLink></li>
                    <li><NavLink to='/home_loans' title="Home Loans" className='list_a'>Home Loans</NavLink></li>
                    <li><NavLink to='/mortgage_rent' title="Mortgage Rent" className='list_a'>Mortgage Rent</NavLink></li>
                </ul>
                <div className="menu" onClick={menuHandler}><CiMenuBurger /></div>
            </nav>
        </header>
    </div>
);
    }

export default Toolbar;