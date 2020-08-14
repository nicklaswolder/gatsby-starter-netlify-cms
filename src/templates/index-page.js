import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/startpageLayout'
import StartPageNavbar from '../components/startpageNav'
import { Link } from 'gatsby'
import logo from '../img/vv.png'

export const IndexPageTemplate = ({
    image,
    title,
    subheading,
}) => (
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
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
