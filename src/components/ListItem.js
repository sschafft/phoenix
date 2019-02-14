import React from 'react'
import { rhythm, scale } from '../utils/typography'
import MetaItems from './MetaItems'
import styled from 'styled-components'

const StyledLink = styled.a`
  color: hsla(0, 0%, 0%, 0.8);
`

const Title = styled.h4`
  color: hsla(0, 0%, 0%, 0.8);
  margin-bottom: ${rhythm(0.1)};
  font-size: ${rhythm(0.8)};
`

const Description = styled.p`
  display: inline-block;
  font-size: ${rhythm(0.7)};
  color: hsla(0, 0%, 0%, 0.5);
`

function ListItem(props) {
  const { title, meta, blurb, link } = props
  return (
    <div>
      <Title>
        <StyledLink href={link} target="_blank">
          {title}
        </StyledLink>
      </Title>
      <MetaItems meta={meta} />
      <Description> {blurb} </Description>
    </div>
  )
}

export default ListItem
