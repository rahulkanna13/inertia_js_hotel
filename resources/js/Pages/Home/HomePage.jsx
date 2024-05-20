import React from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
// import DatePicker from '../components/DatePicker';
// import NumberOfPersons from '../components/NumberOfPersons';
// import FeaturedHotels from '../components/FeaturedHotels';
import PrimaryButton from '@/Components/PrimaryButton';
import HotelFinder from '@/Components/HotelFinder';
import FeaturedHotels from '@/Components/FeaturedHotels';
import { usePage } from '@inertiajs/react';
import BottomNavBar from '@/Components/BottomNavBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';


const HomePage = () => {
    const { is_authenticated, user_name } = usePage().props;
    console.log(is_authenticated, user_name);

    return (
        <GuestLayout>
        <div>
            <p>{user_name}</p>
            {is_authenticated && <Header user_name={user_name} />}
            <SearchBar />
            <HotelFinder />
            <FeaturedHotels />
            {/* <BottomNavBar /> */}
        </div>
        </GuestLayout>

    );
};

export default HomePage;
