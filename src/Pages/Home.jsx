import React from 'react'
import MyNavbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner';
import Service from '../Components/Service/Service';

const Home = () => {
    return (
        <React.Fragment>
            <MyNavbar />
            <Banner />
            <Service />
        </React.Fragment>
    )
}

export default Home;