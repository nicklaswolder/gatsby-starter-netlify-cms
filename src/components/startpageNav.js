import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/vv.png'
import { Row, Col } from 'react-simple-flex-grid';
import './flexgrid.sass'



const StartPageNavbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: 'is-active',
                    })
                    : this.setState({
                        navBarActiveClass: '',
                    })
            }
        )
    }

    render() {
        return (
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div
                        id="startPageNavMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered grid-wrapper">
                            <div className={"startpage-nav-item"}>
                                <Link className="startpage-navbar-item" to="/products">
                                    Våra producenter
                                </Link>
                            </div>
                            <div className={"startpage-nav-item"}>
                                <Link className="startpage-navbar-item" to="/blog">
                                    Savant
                                </Link>
                            </div>
                            <div className={"startpage-nav-item"}>
                                <Link className="startpage-navbar-item" to="/privatimport">
                                    Privatimport
                                </Link>
                            </div>
                            <div className={"startpage-nav-item"}>
                                <Link className="startpage-navbar-item first" to="/about">
                                    Om oss
                                </Link>
                            </div>
                            <div className={"startpage-nav-item"}>
                                <Link className="startpage-navbar-item" to="/contact">
                                    Kontakta oss
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
        )
    }
}

export default StartPageNavbar
