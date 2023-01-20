import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export default function PrintTicket(){

    const[ticketId,setTicketId]= useState('');


    const onSearch= (searchTicket) => {
        //our api to fetch the search result
        console.log('search', searchTicket);
    }

    const handleSubmit = async (e, id)=>{ 
        e.preventDefault(); 
        await fetch(`https://localhost:3001/api/tickets/${id}`, {
            "method": "GET",
            "headers": { 'Content-Type': 'application/json'},
        });
    }
    

    return(
        <div>
            <h2 className="text-2xl text-left text-white m-5">Print Ticket</h2>

            <form className='text-black'>
                <input  id='searchbar'
                    type='text'
                    value={ticketId}
                    placeholder={'Search ticket id'}
                    onChange={(e) => setTicketId(e.target.value)}
                />

                <button className="bg-white hover:bg-blue-700 py-2 px-8 rounded text-black m-5" id='searchbtn' onClick={() => onSearch(ticketId)} onSubmit={handleSubmit}>Search</button>
                <div className='flex-col '>

                <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5 items-center" type="submit" id='printbtn'>Print</button>

                </div>
            </form>
            <p className='mt-5'>Terug naar Menu</p>
            <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5 " id='backToMenuFromPrint'>
                <Link to={'/admin'}> Menu</Link>
            </button>

        </div>
    );
}
//const filteredResults = results.filter(result => result.status === 'active');