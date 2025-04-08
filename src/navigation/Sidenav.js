import React from 'react';
import './Sidenav.css';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WidgetsIcon from '@mui/icons-material/Widgets';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Sidenav() {
  return (
    <div className='sidenav'>
      <img className='sidenav_logo' src='./images/applogo.jpg' alt="" />
      <div className="sidenav_button">
          <button className='sidenav_buttons'>
            <CottageIcon/>
            <span>Home</span>
          </button>
          <button className='sidenav_buttons'>
            <SearchIcon/>
            <span>Search</span>
          </button>
          <button className='sidenav_buttons'>
            <ExploreIcon/>
            <span>Explore</span>
          </button>
          <button className='sidenav_buttons'>
            <SlideshowIcon/>
            <span>Reels</span>
          </button>
          <button className='sidenav_buttons'>
            <FavoriteIcon/>
            <span>Notifications</span>
          </button>
          <button className='sidenav_buttons'>
            <AddBoxIcon/>
            <span>Create</span>
          </button>
          <button className='sidenav_buttons'>
            <SpeakerNotesIcon/>
            <span>Chats</span>
          </button>
      </div>

        <div className="sidenav_more">
        <button className='sidenav_buttons'>
            <WidgetsIcon/>
            <span>Menu</span>
          </button>
        </div>

    </div>
  )
}

export default Sidenav;
