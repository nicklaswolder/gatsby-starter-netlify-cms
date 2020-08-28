import React from 'react'
import PropTypes from 'prop-types'
import { RestaurantPageTemplate } from '../../templates/restaurant-page'

const RestaurantPagePreview = ({ entry, widgetFor }) => (
    <RestaurantPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

RestaurantPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default RestaurantPagePreview
