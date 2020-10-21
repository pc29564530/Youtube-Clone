import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import  WhatshotIcon  from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WatchLaterIcon  from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon  from '@material-ui/icons/OndemandVideo';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';




function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Tending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
             <hr />
             <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="YOur videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>

        </div>
    )
}

export default Sidebar;
