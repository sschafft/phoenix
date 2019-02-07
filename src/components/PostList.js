import React from 'react'
import PostListItems from './PostListItems'
import { rhythm, scale } from '../utils/typography'

function PostList() {
  return (
    <section className="masonry-contained">
      <div className="container">
          <div className="row">
              <div className="masonry">
                  <div className="masonry__filters" data-filter-all-text="Show All"></div>
                  <div className="masonry__container masonry--animate masonry--active">
                    <PostListItems />
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default PostList
