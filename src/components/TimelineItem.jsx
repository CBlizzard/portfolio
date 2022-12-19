import React from 'react';

export default function TimelineItem({year, duration, details, title}){
    return(
        <ol className='flex flex-col md:flex-row relative border-1 border-teal-200 dark:border-stone-900'>
            <li className='mb-10 ml-4'>
                <div className='absolute h-3 w-3 bg-teal-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-000 dark:bg-stone-700' />
                <p className='flex flex-wrap fle-row gap-4 items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-teal-900 rounded-md'>
                        {year}
                    </span>
                    <h3 className='text-lg font-semibold text-teal-900 dark:text-orange-400'>
                        {title}
                    </h3>
                    <div className='my-1 text-sm font-normal leading-none text-teal-400'>
                        {duration}
                    </div>
                    <p className='my-2 text-base font-normal text-teal-500'>
                        {details}
                    </p>
                </p>
            </li>
        </ol>
    )
}