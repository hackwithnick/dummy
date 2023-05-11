import React from 'react';
import {section1Data} from '../data';
const section1 = () => {
    const {title,subtitle} = section1Data;
    return (
    <section className='lg:h-[900px] py-12'>
        <div className='container mx-auto'>
            <div>
                {/* text */}
                <div>
              <h1 className='h1 xl:max-w-[700px]'>{title}</h1>
              <p>{subtitle}</p>
                </div>
            </div>
        </div>
    </section>
    );
};
export default section1;