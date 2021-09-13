import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import DateIcon from 'images/calendar.svg'
import TimeIcon from 'images/watch.svg'

// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  ReadingTimeWrapper,
} from './BlogPostCard.styles'

const BlogPostCard = ({ slug, title, date, readingTime, excerpt, image }) => {
  const fluid = getImage(image)
  return (
    <>
      <CardWrapper>
        <ImgWrapper>
          <GatsbyImage image={fluid} />
        </ImgWrapper>
        <TextWrapper>
          <Link to={slug}>
            <h2>{title}</h2>
          </Link>
        </TextWrapper>
        <StatWrapper>
          <DateWrapper>
            <img src={DateIcon} alt="date" />
            {date}
          </DateWrapper>
          <ReadingTimeWrapper>
            <img src={TimeIcon} alt="time" />
            {readingTime}
          </ReadingTimeWrapper>
        </StatWrapper>
        <p>{excerpt}</p>
      </CardWrapper>
    </>
  )
}

export default BlogPostCard
