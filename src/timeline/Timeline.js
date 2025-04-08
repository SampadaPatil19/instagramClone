import React, { useState } from 'react';
import './Timeline.css'; 
import Suggestions from './Suggestions';
import Posts from './Posts/Posts.js' 
function Timeline() {
  const [posts,setPosts] = useState([
         
    {
      user:'rahulrk',
      postImg:'./images/post2.jpg',
      likes:"800 likes",
      timestamp:"1d"
    },
    {
      user:'prince_parimal',
      postImg:'./images/post1.jpg',
      likes:"600 likes",
      timestamp:"2d"
    },
    {
      user:'gunjan.19',
      postImg:'./images/post3.jpg',
      likes:"400 likes",
      timestamp:"22hr"
    },
    {
      user:'rahulrk',
      postImg:'./images/post4.jpg',
      likes:"2030 likes",
      timestamp:"2d"
    },
    {
      user:'gunjan.19',
      postImg:'./images/post5.jpg',
      likes:"200 likes",
      timestamp:"10min"
    },
  ]);
  return (
    <div className='timeline'>
      <div className="timeline-left">
        <div className="timeline_posts">
           {posts.map((post) => 
            <Posts
              user = {post.user}
              postImg = {post.postImg}
              likes = {post.likes}
              timestamp = {post.timestamp}
            />
           )}
        </div> 
      </div>
      <div className="timeline-right">
          <Suggestions/>
      </div> 
      
    </div>
  )
}

export default Timeline;
