/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.rewind()
  const attrs = helmet.htmlAttributes.toComponent()

  return (
    <html {...attrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {helmet.link.toComponent()}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {Object.keys(assets.javascript).map((key) =>
          <script key={key} src={assets.javascript[key]} />
        )}
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.string.isRequired,
  assets: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Html
