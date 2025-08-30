import data from '../assets/data.json'
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'


interface InfoProps {
    question: string,
    answer: string,
    index: number,
    isNotHidden: boolean,
    toggle: (index: number) => void,
}

function Info({ question, answer, index, isNotHidden, toggle }: InfoProps) {


    return <div onClick={() => toggle(index)} className={`flex flex-col w-full gap-7 py-7 ${data.length - 1 == index ? '' : 'border-b'} border-purple-100`}>
        <div className='flex items-center justify-between'>
            <h2 className='font-semibold hover:text-purple-700 hover:cursor-pointer transition-colors duration-100 ease-in w-[250px]'>{question}</h2>
            <button className='hover:cursor-pointer'>
                {isNotHidden ? <img src={Minus} alt="minus image to toggle" /> : <img src={Plus} alt="plus image to toggle" />}
            </button>
        </div>
        <p className={`text-purple-600 text-[16px] transition-all ${isNotHidden ? 'duration-200 opacity-100 ease-in' : 'duration-200 opacity-0 ease-out'}`}>{ isNotHidden? answer: ''}</p>
    </div>
}

export default Info