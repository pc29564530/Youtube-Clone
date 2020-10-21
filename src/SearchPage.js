import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/ >
                <h2>FILTER</h2>
            </div>
            <hr />
            <VideoRow 
            image="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
            channel="Pawan Chaudhary"
            verified
            subs="659K"
            noOfVideos={382}
            description="You can awesome programming lessons here! Also expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />
            <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
               <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
               <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
               <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
               <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
               <VideoRow
              title="Become a Web Developer in 10 minutes | 2019/2020"
              views="2.3M Views"
              timestamp="3 days ago"
              channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKMwj1Y176CcTnRg94EClqCIsAM8P6oGgPX8iy2w=s88-c-k-c0x00ffffff-no-rj-mo"
              channel="Pawan Chaudhary"
              image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"/>
        </div>
    )
}

export default SearchPage
