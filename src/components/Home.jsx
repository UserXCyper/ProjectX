import React, { useContext, useRef } from 'react'
import { VideoContext } from '../context/VideoContext'
import { UserContext } from '../context/UserContext'

export const Home = () => {

  const { User } = useContext(UserContext)

  // useRef can access to element 
  const emailRef = useRef('email')
  const handleChange = () => {
    console.log(emailRef.current.value);
    emailRef.current.focus()
    emailRef.current.style.border = '1px solid red'
  }
  const { videos } = useContext(VideoContext)

  return (
    <>
      <div className="w-full min-h-screen border">
        <span>{User.username}</span>

        <div className="flex flex-wrap w-full p-4 sm:p-6 lg:p-10 gap-5">
          {videos.map((items) => (
            <div
              key={items.id}
              className="
            w-full sm:w-[48%] lg:w-[30%]
            rounded-2xl p-3 overflow-hidden shadow
            transform transition-transform duration-300
            hover:-translate-y-2
          "
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">{items.id}</h1>
                <h1>{items.name}</h1>

                {/* Responsive video */}
                <div className="w-full aspect-video">
                  <iframe
                    src={items.videolink}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                </div>

                <h1>{items.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}
// 1st Create contextName -> createContext()
// 2nd Create Provider -> Context.Provider
// 3rd Wrap Provider -> <Provider> ... <Provider />
// 4rth To use Context -> useContext(contextName)