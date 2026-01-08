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
      <div className='w-full h-screen border '>
        <span>{User.username}</span>
        <div className='flex flex-wrap w-full p-10 gap-5'>
          {
            videos.map((items) => (
              <div
                key={items.id}
                className="
                rounded-2xl p-3 overflow-hidden shadow
                transform transition-transform duration-300
                hover:-translate-y-2
                "
              >
                <div className="flex flex-col">
                  <h1 className='font-bold'>{items.id}</h1>
                  <h1>{items.name}</h1>
                  <iframe
                    src={items.videolink}
                    width="300"
                    height="200"
                    allow="autoplay"
                    allowFullScreen
                  />
                  <h1>{items.description}</h1>
                </div>
              </div>
            ))
          }

        </div>
      </div>

      <div className='w-full border'>
        <span>{emailRef.current.value}</span>
        <form action="">
          <div className='m-5'>
            <label htmlFor="email">Email</label>
            <input className='w-300 h-10 rounded-2xl' ref={emailRef} type="email" name="email" id="email" />
          </div>
          <button className='w-20 h-10 border rounded-2xl' onClick={handleChange} type='button'>Submit</button>
        </form>
      </div>
    </>
  )
}
// 1st Create contextName -> createContext()
// 2nd Create Provider -> Context.Provider
// 3rd Wrap Provider -> <Provider> ... <Provider />
// 4rth To use Context -> useContext(contextName)