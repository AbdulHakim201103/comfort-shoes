import React from 'react';
import './Inventory.css'
import useInventory from '../../hooks/useInventory';
import InventoryCard from '../InventoryCard/InventoryCard';

const Inventory = () => {
    const [inventory, setInventory] = useInventory ([])
    return (
        <div className='container bg-light my-5'>
            <h1 className='py-5 text-danger text-center'>Inventory</h1>            
            <div className='inventoryContainer'>
                {
                    inventory.slice(0,6).map(shoe => <InventoryCard
                    key={shoe._id}
                    shoe={shoe}
                    ></InventoryCard>)
                }
            </div>
        </div>
    );
};

export default Inventory;