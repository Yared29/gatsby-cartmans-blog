import React from 'react'
import { getImage } from 'gatsby-plugin-image'
// Styles
import { Wrapper, WrapperBGImage, Content } from './BGImage.styles'

const BGImage = ({ fluid, title, className, children }) => {
  const image = getImage(fluid)
  return (
    <Wrapper>
      <WrapperBGImage title={title} image={image} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  )
}

export default BGImage
