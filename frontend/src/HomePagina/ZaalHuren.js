import "../tailwind.css";
export function ZaalHurenHP() {
    return <>
    <h1 className="text-center">Zaal Huren</h1>
    <div className="flex flex justify-center mt-3 mb-6">
        <div className="bg-brightest mx-3 pr-6 pr-10 pb-10 rounded-xl pt-10"> 
        <h2>Zaal Naam 1</h2>
        <p>Aantal stoelen: 240</p>
        <p>Aantal rangen: 4</p>
        </div>

        <div className="bg-brightest mx-3 pr-6 pr-10 pb-10 rounded-xl pt-10">
        <h2>Zaal Naam 2</h2>
        <p>Aantal stoelen: 180</p>
        <p>Aantal rangen: 2</p>
        </div>

        <div className="bg-brightest mx-3 pr-6 pr-10 pb-10 rounded-xl pt-10">
        <h2>Zaal Naam 3</h2>
        <p>Aantal stoelen: 90</p>
        <p>Aantal rangen: 2</p>
        </div>

        <div className="bg-brightest mx-3 pr-6 pr-10 pb-10 rounded-xl pt-10">
        <h2>Zaal Naam 4</h2>
        <p>Aantal stoelen: 440</p>
        <p>Aantal rangen: 3</p>
        </div>
    </div>

    <div className="text-center mb-10" ><a className="bg-brightest hover:bg-rose-900 rounded-md px-4 py-2" href="/">Een zaal huren</a></div>
    
    </>
}