import React, { Component } from 'react';
import { Responsive} from 'semantic-ui-react';
import ClassNames from 'classnames';
import { Link } from '../';
import './Navigation.scss';

class Navigation extends Component {
    state = {
        dropdownOpen: false,
        menuItems: [
            { title: 'About Me', link: 'AboutMe' }, 
            { title: 'Background', link: 'Background' }, 
            { title: 'Projects', link: 'Projects' }, 
            { title: 'Hard Skills', link: 'HardSkills' }, 
            { title: 'Soft Skills', link: 'SoftSkills' }, 
            { title: 'Find Me', link: 'FindMe' },
        ],
    }

    toggleDropdown = () => {
        const { dropdownOpen } = this.state;
        this.setState({dropdownOpen: !dropdownOpen})        
    }

    renderMobileDropdown = () => {
        const { menuItems } = this.state;
        return (
            <div className='Navigation-mobileDropdown'>
            {this.renderHamburger()}
            <h1>Marilyn Magnusen</h1>
                <ul>
                    { menuItems.map((menuItem) => (<li key={menuItem.link} onClick={() => this.setState({dropdownOpen: false})}><Link to={menuItem.link}>{menuItem.title}</Link></li>))}
                </ul>
            </div>)
    }

    renderNavigation = () => {
        const { menuItems } = this.state;
      
        return (
            <div className='Navigation-main container'>
                <h1>Marilyn Magnusen</h1>
                <ul>
                    { menuItems.map((menuItem) => (<li><Link key={menuItem.link} to={menuItem.link}>{menuItem.title}</Link></li>))}
                </ul>
                {this.renderHamburger()}
            </div>
        )
    }

    renderHamburger = () => {
        const { dropdownOpen } = this.state;

        return (
            <div className='hamburgerContainer' onClick={this.toggleDropdown}> 
                <div >  
                    <div className={ClassNames({'left': dropdownOpen}, 'hamburgerLine')} />
                    <div className={ClassNames({'middle': dropdownOpen}, 'hamburgerLine')} />
                    <div className={ClassNames({'right': dropdownOpen}, 'hamburgerLine')} />
                </div>
            </div> 
        )
    }

    render() {
        const { dropdownOpen } = this.state;

        return ( 
            <nav className='Navigation'>
            {dropdownOpen && 
                <Responsive maxWidth={991}> 
                    {this.renderMobileDropdown()}
                </Responsive>
            }
                {this.renderNavigation()}
            </nav>
        )
    }
}

export default Navigation;