import { useState } from 'react'

import Info from './Info'
import data from '../assets/data.json'


function InfoContainer() {

    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        if (index === activeIndex)
            setActiveIndex(null)
        else
            setActiveIndex(index)
    }

    return <div className='flex flex-col items-start text-[17px] w-full'>
        {data.map((faq) => {
            return <Info question={faq.question} answer={faq.answer} key={faq.index} isNotHidden={activeIndex === faq.index} toggle={toggle} index={faq.index} />
        })}
    </div>
}

export default InfoContainer