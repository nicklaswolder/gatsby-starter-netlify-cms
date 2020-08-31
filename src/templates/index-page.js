import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/startpageLayout'
import StartPageNavbar from '../components/startpageNav'
import Features from '../components/Features'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MyFunkySlider from '../components/slider'

import { Link } from 'gatsby'
import logo from '../img/vv.png'

export const IndexPageTemplate = ({
    image,
    title,
    mainpitch,
    subheading,
    intro,
    main,
}) => (
        <div>
            <div style={{
                padding: "3vh",
                display: "flex",
                position: "relative"

            }}>
                <div
                    className="full-width-image margin-top-0"
                    style={{
                        backgroundImage: `url(${
                            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                            })`,
                        backgroundPosition: `top left`,
                        backgroundAttachment: `fixed`,
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%"
                    }}>
                        <div
                            style={{
                                display: 'block',
                                height: '150px',
                                lineHeight: '1',
                                marginTop: '10px',
                                justifyContent: 'space-around',
                                alignItems: 'left',
                                flexDirection: 'column',
                                position: "absolute",
                                top: "4vh",
                                left: "2vh",
                                maxWidth: "90%"
                            }}
                        >
                            <h1
                                className=" is-size-3-mobile is-size-2-tablet is-size-1-widescreen testtesttest logo-container "
                                style={{
                                    boxShadow:
                                        'rgb(209, 225, 215) 0.5rem 0px 0px, rgb(209, 225, 215) -0.5rem 0px 0px',
                                    backgroundColor: 'rgb(209, 225, 215)',
                                    color: '#000',
                                    fontWeight: '100',
                                    lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {title}
                            </h1>
                            <h3
                                className=" is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                                style={{
                                    boxShadow:
                                        'rgb(209, 225, 215) 0.5rem 0px 0px, rgb(209, 225, 215) -0.5rem 0px 0px',
                                    backgroundColor: 'rgb(209, 225, 215)',
                                    color: '#000',
                                    fontWeight: '100', lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {subheading}
                            </h3>
                        </div>
                        <StartPageNavbar />
                    </div>

                </div>

            </div>
            <div className="content text-container">
                <div className="columns">
                    <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                            {intro.heading}
                        </h3>
                        <p>{intro.description}</p>
                    </div>
                </div>

                <Features gridItems={intro.blurbs} />

            </div>
            <div className="content pitch-container">
                <div className="content">
                    <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                        <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                </div>
            </div>
            <div className="main-heading-container content">
                <div className="content">
                    <h3 className="has-text-weight-semibold is-size-3">
                        {main.heading}
                    </h3>
                    <p>{main.description}</p>
                </div>
            </div>
            <div className="slider-container ">
                <MyFunkySlider pictures={[main.image1, main.image2, main.image3, main.image4, main.image5, main.image6]} />
            </div>
        </div>
    )

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                intro={frontmatter.intro}
                main={frontmatter.main}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
            heading
            description
            image1 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            image2 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            image3 {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 72) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            image4 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image5 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image6 {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 72) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
          }
      }
    }
  }
`
