import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/startpageLayout'
import StartPageNavbar from '../components/startpageNav'


export const IndexPageTemplate = ({
    image,
    title,
    subheading,
}) => (
        <div>
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
                <div
                    style={{
                        display: 'block',
                        height: '150px',
                        lineHeight: '1',
                        marginTop: '10px',
                        justifyContent: 'space-around',
                        alignItems: 'left',
                        flexDirection: 'column',
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                        style={{
                            boxShadow:
                                'rgb(209, 225, 215) 0.5rem 0px 0px, rgb(209, 225, 215) -0.5rem 0px 0px',
                            backgroundColor: 'rgb(209, 225, 215)',
                            color: 'white',
                            lineHeight: '1',
                            padding: '0.25em',
                        }}
                    >
                        {title}
                    </h1>
                    <h3
                        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                        style={{
                            boxShadow:
                                'rgb(209, 225, 215) 0.5rem 0px 0px, rgb(209, 225, 215) -0.5rem 0px 0px',
                            backgroundColor: 'rgb(209, 225, 215)',
                            color: 'white',
                            lineHeight: '1',
                            padding: '0.25em',
                        }}
                    >
                        {subheading}
                    </h3>
                </div>
                <StartPageNavbar />
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
