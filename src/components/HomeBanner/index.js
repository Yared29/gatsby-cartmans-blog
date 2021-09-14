import React from 'react'
import { Link } from 'gatsby'
// Component
import BGImage from '../BGImage'
// Hooks
import useBannerQuery from '../../hooks/useBannerQuery'
// Styles
import { BannerWrapper, TextWrapper } from './HomeBanner.styles'

const HomeBanner = () => {
  const {
    bannerImage,
    bannerImageText,
    bannerImageBtnText,
    bannerImageBtnLink,
  } = useBannerQuery()
  console.log('banner image', bannerImage)
  return (
    <BannerWrapper>
      <BGImage title="Banner Image" fluid={bannerImage}>
        <TextWrapper>
          <h2>{bannerImageText}</h2>
          <Link to={bannerImageBtnLink}>
            <button>{bannerImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </BannerWrapper>
  )
}

export default HomeBanner
