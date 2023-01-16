import "../tailwind.css";
export function ZaalHurenHP() {
    return <>
    <h2 className="text-center text-4xl">Zaal Huren</h2>
    <div className="flex flex justify-center mt-3 mb-6">
        <div className="bg-brightest mt-5 mx-3 pr-6 pr-10 pb-20 rounded-xl pt-10"> 
        <h3 className="text-2xl text-normal">Zaal Naam 1</h3>
        <p>Aantal stoelen: 240</p>
        <p>Aantal rangen: 2</p>
        </div>

        <div className="bg-brightest mt-5 mx-3 pr-6 pr-12 pb-20 rounded-xl pt-10">
        <h3 className="text-2xl text-normal">Zaal Naam 2</h3>
        <p>Aantal stoelen: 180</p>
        <p>Aantal rangen: 2</p>
        </div>

        <div className="bg-brightest mt-5 mx-3 pr-6 pr-12 pb-20 rounded-xl pt-10">
        <h3 className="text-2xl text-normal">Zaal Naam 3</h3>
        <p>Aantal stoelen: 90</p>
        <p>Aantal rangen: 2</p>
        </div>

        <div className="bg-brightest mt-5 mx-3 pr-6 pr-12 pb-20 rounded-xl pt-10">
        <h3 className="text-2xl text-normal">Zaal Naam 4</h3>
        <p>Aantal stoelen: 440</p>
        <p>Aantal rangen: 3</p>
        </div>
    </div>

    <div className="text-center my-10" ><a className="bg-brightest hover:bg-rose-900 rounded-md px-4 py-3" href="/Zaal">Een zaal huren</a></div>
    
    </>
}