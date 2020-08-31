import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/vv.png'
import bird from '../img/bird.png'
import { Row, Col } from 'react-simple-flex-grid';
import './flexgrid.sass'
import { GiWineBottle } from 'react-icons/gi'
import { FcAbout } from 'react-icons/fc'
import { RiMailSendLine } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'


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
                            {/* <div className={"startpage-nav-item first"}>
                                <Link to="/" className="startpage-navbar-item testtesttest" title="Logo">
                                    <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                                </Link>
                            </div> */}

                            <div className={"artist-card fourth"}>
                                <a className="artist-card__title testtesttest" href="https://privatimport.netlify.app/">
                                    {/* <AiOutlineShop /> */}
                                    Privatkund
                                </a>
                            </div>
                            <div className={"artist-card fourth"}>
                                <Link className="artist-card__title testtesttest" to="/restaurant">
                                    {/* <AiOutlineShop /> */}
                                    Restaurangkund
                                </Link>
                            </div>
                            <div className={"artist-card second"}>
                                <Link className="artist-card__title testtesttest" to="/products">
                                    {/* <GiWineBottle /> */}
                                    Våra producenter
                                </Link>
                            </div>

                            {/* <div className={"artist-card fifth"}>
                                <Link className="artist-card__title testtesttest first" to="/about">
                                    Om oss
                                </Link>
                            </div> */}
                            <div className={"artist-card sixth"}>
                                <Link className="artist-card__title testtesttest" to="/contact">
                                    {/* <RiMailSendLine /> */}
                                    Kontakt
                                </Link>
                            </div>
                            <div className={"artist-card sixth"}>
                                <Link className="artist-card__title testtesttest" to="/collab">
                                    {/* <RiMailSendLine /> */}
                                    Samarbeten
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
        )
    }
}

export const instaQuery = graphql`
{
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`







export default StartPageNavbar
