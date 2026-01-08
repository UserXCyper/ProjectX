import React, { useState } from 'react'
import { VideoContext } from '../context/VideoContext'
import chotabheem from '../assets/chotabheem.mp4'
import Goat from '../assets/GOAT.mp4'

export const VideoProvider = ({ children }) => {

    const videos = [
        {
            id: 1,
            name: 'GOAT - New Trailer (HD)',
            description: 'danger',
            videolink: Goat
        },
        {
            id: 2,
            name: 'Chota Bheem fan made trailer',
            description: 'danger',
            videolink: chotabheem
        },
        {
            id: 3,
            name: 'Bike',
            description: 'danger',
            videolink: 'https://youtu.be/_A1fJyEBrm4?si=0L0QAnMA-wQP-vfI'
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
