import React from 'react';
import Title from './Title'

export default function Contact(){
    return(
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form action="#" method='post' className='flex flex-col w-full md:w-7/12'>
                    <Title>Contact</Title>
                    <input 
                        name='name'
                        type='text'
                        placeholder='Name'
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <input 
                        name='email'
                        type='email'
                        placeholder='Email'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <textarea 
                        name="message"
                        placeholder='message'
                        rows='10'
                        className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />
                    <button type='button' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white   bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md '>
                        send message
                    </button>
                </form>
            </div>
        </div>
    )
}