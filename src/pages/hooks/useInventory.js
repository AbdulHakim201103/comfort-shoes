import { useEffect, useState } from "react"

const useInventory = () =>{
    const [inventory, setInventory] = useState ([]);
    useEffect(()=>{
        const url = "https://safe-brook-20632.herokuapp.com/inventory"
        fetch (url)
        .then (res => res.json())
        .then (data => setInventory(data));
    },[inventory]);
    return [inventory, setInventory];
}
export default useInventory;