import React from 'react'
import PropTypes from 'prop-types'
import { CollabPageTemplate } from '../../templates/collab-page'

const CollabPagePreview = ({ entry, widgetFor }) => (
    <CollabPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

CollabPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default CollabPagePreview
