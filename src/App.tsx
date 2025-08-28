import DesktopBackround from './assets/images/background-pattern-desktop.svg'
import FAQ from './components/FAQ'

function App() {
    return <div className='relative h-full'>
        <img src={DesktopBackround} alt="Desktop Backgorund Image" className='w-full' />
        <FAQ/>
    </div>
}

export default App;