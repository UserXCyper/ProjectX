import React, { useState } from 'react'
import { VideoContext } from '../context/VideoContext'
import chotabheem from '../assets/chotabheem.mp4'

export const VideoProvider = ({ children }) => {

    const videos = [
        {
            id: 1,
            name: 'Chiranjeevi_Hanuman_The_Eternal_Official',
            description: 'Chiranjeevi_Hanuman_The_Eternal_Official',
            videolink:'https://res.cloudinary.com/ddts2iw9t/video/upload/v1767871172/Chiranjeevi_Hanuman_The_Eternal_Official_First_Look_In_cinemas_2026_-_Star_Studios_1080p_h264_jg77be.mp4'
        },
        {
            id: 2,
            name: 'Baahubali_The_Eternal_War_-_Official_Trailer_2027',
            description: 'Baahubali_The_Eternal_War_-_Official_Trailer_2027',
            videolink: 'https://res.cloudinary.com/ddts2iw9t/video/upload/v1767870926/Baahubali_The_Eternal_War_-_Official_Trailer_2027_-_IGN_1080p_h264_nkimuz.mp4'
        },
        {
            id: 3,
            name: 'GOAT - New Trailer (HD)',
            description: 'GOAT - New Trailer (HD)',
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
