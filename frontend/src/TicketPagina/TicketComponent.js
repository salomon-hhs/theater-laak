import React, {useState} from "react";
export function TicketPagina(){
    return<>
    <Ticket/>
    </>
    
}


export function Ticket(){
    //this should be a fetch one day
   const[totaal, PlusMinTotaal]= useState(0);
   const[aantal, PlusMinAantal]= useState(0);
    let prijs = 12.00;

    function Plus(){
        if(aantal >= 5){
        alert("U heeft te veel tickets geresiveerd");
        }
        else{
            PlusMinTotaal(totaal + prijs);
            PlusMinAantal(aantal + 1);
        }
    }

    function Min(){
        if(aantal <= 0){
            alert("Dat mag niet");
            }
            else{
            PlusMinAantal(aantal - 1);
            PlusMinTotaal(totaal - prijs);
            }
    }
    
    
    return <>
    <div className="my-">
        <div className="flex flex-row space-x-24 mb-2">
            <h3>Datum</h3>
            <h3>Stoel</h3>
            <h3>Aantal</h3>
            <h3>Totaal</h3>
        </div>

        <span className="flex flex-row space-x-28 bg-dark max-w-xl text-center p-2 px-3 rounded-md">
            <div><p text-center id="Datum">Datum</p></div>

            <div><p id="Stoel">Stoel</p></div>

            <div> 
                <span><button className="bg-darkest px-2 rounded-md rotate-180"  onClick={Plus} >v</button></span>
                <span>--</span>
                <span><button className="bg-darkest px-2 rounded-md"  onClick={Min}>v</button></span>
                <span id="aantal"> ({aantal})</span>
            </div>

            <div id="totaal">{totaal}</div>
        </span>
        <span><button className="bg-brightest p-2 rounded-md">Betaal</button></span>
    </div>
    </>
}

<img className="w-3" src="https://cdn-icons-png.flaticon.com/128/130/130906.png"/>