import DesktopBackground from './assets/images/background-pattern-desktop.svg'
import MobileBackground from './assets/images/background-pattern-mobile.svg'
import FAQ from './components/FAQ'

function App() {
    return <div className='relative h-full overflow-auto scrollbar-hide'>
        {/* <img src={DesktopBackground} alt="Desktop Backgorund Image" className='w-full' /> */}
        <img src={MobileBackground} alt="Desktop Backgorund Image" className='w-full' />
        
        <FAQ/>
    </div>
}

export default App;