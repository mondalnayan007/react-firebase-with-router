import React from 'react';
import { useLoaderData } from 'react-router';
import PhonesCard from '../../Components/PhonesCard/PhonesCard';

const Phones = () => {
    const phonesData = useLoaderData();
  
    return (
        <div>
            <h1>Total phones :{phonesData.length} </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                 {
                    phonesData.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                 }
            </div>
        </div>
    );
};

export default Phones;