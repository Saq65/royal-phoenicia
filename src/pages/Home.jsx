import Benefits from './Home/Benifits'
import Corporate from './Home/Corporate'
import FavHotel from './Home/FavHotel'
import FourthSection from './Home/FourthSection'
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
            <FourthSection/>
            <Benefits />
            <Corporate/>
        </div>
    )
}
