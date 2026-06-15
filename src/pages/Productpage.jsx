import PagesHeader from "../components/PagesHeader"
import { use, useEffect, useState } from "react";

import axios from "axios"; 


const Productpage = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const [ALLUsers, setALLUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchALLUsers = async () => {
        try {
            const response = await axios.get(url);
            setALLUsers(response.data);}
        catch (error) {
            console.error("Something went wrong:", error);
        }
        finally {
            setLoading(false);
        }
    };
    console.log(ALLUsers);
    useEffect(() => {
        fetchALLUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

return (
        <>
        
        <PagesHeader 
        title="Product page"
        subTitle="List of available product and services"
         />


         <main className="md:flex flex-wrap">
            {loading ? (
                <p> Loading...</p>
            ) : (
              ALLUsers.map(user => (
             <div key={user.id} className="products">
                <h2>{user.name}</h2>
                 <p>{user.username}</p>
                 <p>{user.phone}</p>
                 <p>{user.website}</p>
                 <p>{user.email}</p>

                 <h2>Companydetails</h2>
                <p>{user.company.bs}</p>
                <h3>Catch Phrase</h3>
                <p>{user.company.catchPhrase}</p>
                <h3>Company Name</h3>
                <p>{user.company.name}</p>
            
            </div>
            ))
            )}
         </main>
        </>
    )
}

export default Productpage