import React, { useState } from 'react'
import { VideoContext } from '../context/VideoContext'
import chotabheem from '../assets/chotabheem.mp4'

export const VideoProvider = ({ children }) => {

    const videos = [
        {
            id: 1,
            name: 'GOAT - New Trailer (HD)',
            description: 'danger',
            videolink:''
        },
        {
            id: 2,
            name: 'Chota Bheem fan made trailer',
            description: 'danger',
            videolink: ''
        },
        {
            id: 3,
            name: 'Bike',
            description: 'danger',
            videolink: 'https://res.cloudinary.com/ddts2iw9t/video/upload/GOAT_New_Trailer_HD_-_Sony_Pictures_Entertainment_1080p_h264_jrnb5r.mp4'
        }
    ]
    
  return (
    <>
        <VideoContext.Provider value={{videos}}>
            {children}
        </VideoContext.Provider>
    </>
  )
}
