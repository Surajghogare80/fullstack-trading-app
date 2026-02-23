import React from 'react';
import CreateTicket from './CreateTicket';
import Hero from './Hero';

import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';

function SupportPage() {
    return (
        <>
            <Hero />
            <CreateTicket />
            <OpenAccount />
        </>
    );
}

export default SupportPage;