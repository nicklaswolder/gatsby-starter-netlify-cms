import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
    <div className="columns column-container">
        {gridItems.map((item) => (
            <div key={item.text} className="">
                <section className="section">
                    <div className="has-text-centered">
                        <div
                            className="section-image-container"
                            style={{
                                width: '100%',
                                display: 'inline-block',
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <p className={"description-container"}>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
}

export default FeatureGrid
