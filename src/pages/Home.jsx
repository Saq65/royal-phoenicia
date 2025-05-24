import FavHotel from './Home/FavHotel'
import Slider from './Home/Slider'
import StayPackage from './Home/StayPackage'
import { ThirdSection } from './Home/ThirdSection'
import Wellness from './Home/Wellness'

export const Home = () => {
    return (
        <div>
            <Slider />
            <Wellness/>
            <FavHotel/>
            <StayPackage/>
            <ThirdSection/>
        </div>
    )
}
