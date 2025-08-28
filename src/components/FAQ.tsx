import StarImage from '../assets/images/icon-star.svg'
import InfoContainer from '../components/InfoContainer'

function FAQ() {
    return <div className="absolute max-w-[600px] w-full flex flex-col items-start bg-white left-1/2 -translate-x-1/2 top-1/5 p-10 pb-0 rounded-3xl text-purple-900 shadow-2xl/15">
        <div className='flex items-center gap-4'>
            <img src={StarImage} alt="Star image as bullet point" />
            <h1 className='text-6xl font-bold '>FAQs</h1>
        </div>

        <InfoContainer />
    </div>
}

export default FAQ