import React from 'react';
import '../Timeline.js';
import './Posts.css';
import { Avatar } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import SendIcon from '@mui/icons-material/Send';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

function Posts({user,postImg,likes,timestamp}) {
  return (
    <div className="post">
        <div className="post_header">
          <div className="post_headerauthor">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            {user} _• <span> {timestamp}</span>
          </div>
          <MoreHoriz/>
        </div>
        <div className="post_image">
          <img src={postImg} alt="" />
        </div>
        <div className="post_footer">
          <div className="post_footerIcon">
            <div className="post_iconMain">
              <FavoriteBorderIcon className='postIcon1'/>
              <MarkChatUnreadIcon className='postIcon2'/>
              <SendIcon className='postIcon3'/>
          </div>
          <BookmarksIcon className='postIcon4'/>
        </div>
    </div>
    {likes}
    </div>
  )
}

export default Posts;
