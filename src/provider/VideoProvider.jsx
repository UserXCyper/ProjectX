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
            videolink: 'https://drive.google.com/file/d/1HoYz9pYGy53daoglDkKHaIwhi74KV_x3/preview'
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
