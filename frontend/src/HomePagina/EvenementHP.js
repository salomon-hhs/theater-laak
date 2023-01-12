import "../tailwind.css";
export function EvenementenHP() {
    return <>
    <img src="https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_1280.jpg" alt="" width="1500"/>
    <div id="containing">
    <h1 id="EventTussenKopje" className="text-center my-4 text-xl">Evenementen</h1>

    <div className="flex justify-center content-around" id="flex1">
              <div className="basis-1/4 mx-2 rounded-md">
                <a href="google.com" id="DanceEv"><img className="rounded-2xl" src="https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_1280.jpg" alt="Link en een foto van een asian celebration evenement"/></a>
              </div>
              
              <div className="basis-1/4 mx-2 rounded-md">
                <a href="google.com" id="ActingEv"><img className="rounded-2xl" src="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_1280.jpg" alt="" height='300px'/></a>
                </div>

              <div className="basis-1/4 mx-2">
                <a href="google.com" id=""><img className="rounded-2xl" src="https://cdn.pixabay.com/photo/2014/08/29/05/00/dance-430554_1280.jpg" alt="" /></a>
              </div>
    </div>
    <div className="text-center mb-20 mt-10"><a className="bg-brightest hover:bg-rose-900 rounded-md px-4 py-40" href="/Evenement">Bekijk alle evenementen</a></div>
    </div>
    </>;
}
