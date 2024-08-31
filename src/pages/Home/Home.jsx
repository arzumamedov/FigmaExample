import React from 'react'
import './HomeStyle.css'
import Navbar from '../../components/Navbar/Navbar'
import FindEvents from '../../components/FindEventsSection/FindEvents'
import PEN from '../../assets/svgs/pen.svg';
import PICTURE from '../../assets/svgs/picture.svg';
import FOOD_DRINK from '../../assets/svgs/food_drink.svg';
import HOLIDAY from '../../assets/svgs/holiday.svg';
import SPORT from '../../assets/svgs/sport.svg';
import CONCERT from '../../assets/svgs/concert.svg';
import CALENDAR from '../../assets/svgs/calendar.svg';
import CHECK_CIRCLE from '../../assets/svgs/check_circle.svg';
import TICKET from '../../assets/svgs/ticket.svg';
import Category from '../../components/CategorySection/Category'
import Slider from '../../components/Slider/Slider';
import PopularDestinations from '../../components/PopularDestinationsSection/PopularDestinations';
import popularImage1 from '../../assets/images/popularimage1.png';
import popularImage2 from '../../assets/images/popularimage2.png';
import popularImage3 from '../../assets/images/popularimage3.png';
import popularImage4 from '../../assets/images/popularimage4.png';
import slideImage1 from '../../assets/images/cardimage1.png';
import slideImage2 from '../../assets/images/cardimage2.png';
import slideImage3 from '../../assets/images/cardimage3.png';
import slideImage4 from '../../assets/images/cardimage4.png';
import slideImage5 from '../../assets/images/cardimage5.png';
import slideImage6 from '../../assets/images/cardimage6.png';
import slideImage7 from '../../assets/images/cardimage7.png';
import slideImage8 from '../../assets/images/cardimage8.png';
import SignUp from '../../components/SignUp/SignUp';
import Footer from '../../components/Footer/Footer';
import SecondSlider from '../../components/SecondSlider/SecondSlider';



function Home() {

  const CategoryData = [{
    name: "Workshops",
    svg: PEN
  },
  {
    name: "Exhibitions",
    svg: PICTURE
  }, {
    name: "Food & Drinks",
    svg: FOOD_DRINK
  }, {
    name: "Holidays",
    svg: HOLIDAY
  }, {
    name: "Sports",
    svg: SPORT
  },
  {
    name: "Concerts",
    svg: CONCERT
  },
  ]

  const FirstSlideData = [{
    img: slideImage1,
    name: "Art & Wine",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 45
  },
  {
    img: slideImage2,
    name: "Outdoor Yoga Session",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15

  },
  {
    img: slideImage3,
    name: "Food Truck Festival",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15
  },
  {
    img: slideImage4,
    name: "Dream Fest",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15
  },
  ]


  const SecondSlideData = [{
    img: slideImage5,
    name: "Art & Wine",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 45
  },
  {
    img: slideImage6,
    name: "Outdoor Yoga Session",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15

  },
  {
    img: slideImage7,
    name: "Food Truck Festival",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15
  },
  {
    img: slideImage8,
    name: "Dream Fest",
    firstsvg: CALENDAR,
    date: "MON, JUL 21 • 4:00 PM",
    secondsvg: CHECK_CIRCLE,
    check: "18 going",
    thirdsvg: TICKET,
    price: 15
  },
  ]


  const PopularDestinationsData = [{
    img: popularImage1,
    name: "Ibiza"
  },
  {
    img: popularImage2,
    name: "Paris"
  },
  {
    img: popularImage3,
    name: "Dubai"
  },
  {
    img: popularImage4,
    name: "Portofino"
  },
  ]

  return (
    <div>
      <Navbar />
      <FindEvents />
      <div className='categoryMain'>
        {CategoryData.map((item, index) => (
          <Category
            key={index}
            name={item.name}
            SVG={item.svg}
          />
        ))}
      </div>
      <div className='sliderHead'>
        <p className='pFirst'>Popular events near you</p>
        <p className='pSecond'>See all</p>
      </div>
      <Slider slidesData={FirstSlideData} />
      <div className='sliderHead'>
        <p className='pFirst'>Upcoming events</p>
        <p className='pSecond'>See all</p>
      </div>
      <SecondSlider seconslidesData={SecondSlideData} />
      <div className='popularText'>
        <p>Popular destinations</p>
      </div>
      <div className='popularMain'>

        {PopularDestinationsData.map((item, index) => (
          <PopularDestinations
            key={index}
            IMAGE={item.img}
            name={item.name}
          />
        ))}
      </div>
      <SignUp />
      <Footer />
    </div>
  )
}

export default Home