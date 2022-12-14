import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name:'Free', price:0, benefits:[
            'lifetime free', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals' 
        ]},
        {id: 2, name:'Regular', price:9.99, benefits:[
            'everithing on  free', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals' 
        ]},
        {id: 3, name:'Premium', price:19.99, benefits:[
            'everything is regular', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals' 
        ]},
    ]
    return (
        <div className="bg-indigo-300 p-4 mt-8">
            <h1 className="text-6xl font-mono text-white">Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt error asperiores explicabo consequatur corporis odit pariatur, quaerat sed. Voluptatibus.</p>
            <div className="grid md:grid-cols-3 gap-3 mt-8">
                {
                    pricingOptions.map(option => <PricingOption option={option} key={option.id}></PricingOption>)
                }
            </div>
            
        </div>
    );
};

export default Pricing;