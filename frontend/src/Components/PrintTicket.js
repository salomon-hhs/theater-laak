import React, {useState} from 'react'

export default function PrintTicket(){

    const[ticketId,setTicketId]= useState('');


    const onSearch= (searchTicket) => {
        //our api to fetch the search result
        console.log('search', searchTicket);
    }

    return(
        <div>
            <h2 className="text-2xl text-left text-white m-5">Print Ticket</h2>

            <form>
                <input 
                    type='text'
                    value={ticketId}
                    placeholder={'Search ticket id'}
                    onChange={(e) => setTicketId(e.target.value)}
                />
                <button onClick={() => onSearch(ticketiD)}>Search</button>
                <button className="bg-red-900 hover:bg-red-700 py-2 px-8 rounded text-white m-5" type="submit">Print</button>
            </form>

        </div>
    );
}
//const filteredResults = results.filter(result => result.status === 'active');