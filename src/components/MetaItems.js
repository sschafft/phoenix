import React from 'react'
import { rhythm, scale } from '../utils/typography'
import styled from "styled-components"

const Meta = styled.ul`
  color: hsla(0,0%,0%,0.8);
  list-style-type: none;
  margin: 0px;

  li:first-child {
    content: '';
    margin: 0px;
    padding: 0px;
    border: none;
  }
`

const MetaItem = styled.li`
  color: hsla(0,0%,0%,0.8);
  display: inline;
  font-size: ${rhythm(.6)};
  margin-left: ${rhythm(.5)};
  border-left: ${rhythm(.01)} solid hsla(0,0%,0%,0.95);
  padding-left: ${rhythm(.5)};
`

const MetaDescription = styled.span`
  color: hsla(0,0%,0%,0.8);
`

const MetaLabel = styled.span`
  color: hsla(0,0%,0%,0.5);
  font-weight: 700;
  text-transform: uppercase;
`

function MetaItems(props) {
  const { meta } = props;
  // If meta items are present, iterate through
  if (meta) {
  return (
    <Meta>
    { meta.map(( item, index ) => {
      let ItemDescription = item.data
      if (item.git){
        ItemDescription = <a href={item.git} target="_blank">{item.data}</a>
      }
      return(
        <MetaItem key={`item-${index}`}>
          <MetaLabel>{item.label}: </MetaLabel>
          <MetaDescription>{ItemDescription}</MetaDescription>
        </MetaItem>
      )
    })}
    </Meta>
  )}
  // If no meta - return empty
  return null
}

export default MetaItems
