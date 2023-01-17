import "../tailwind.css";
export function EvenementenHP() {
    return <>
    <img id="HomeImg_Id" src="https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_1280.jpg" alt="" />
    <div id="containing">
    <h2 id="EventTussenKopje" className="text-center my-4">Evenementen</h2>

    <div className="flex justify-center content-around" id="flex1">
              <div className="mx-2 rounded-md">
                <a href="/Evenementen" id="DanceEv"><img className=" Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_1280.jpg" alt="Link en een foto van een asian celebration evenement"/></a>
              </div>
              
              <div className=" mx-2 rounded-md">
                <a href="" id="ActingEv"><img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_1280.jpg" alt="Link en een foto van de walking dead evenement" height='300px'/></a>
                </div>

              <div className=" mx-2">
                <a href="google.com" id=""><img className="Event_img rounded-2xl" src="https://cdn.pixabay.com/photo/2014/08/29/05/00/dance-430554_1280.jpg" alt="" /></a>
              </div>
    </div>
    <div className="text-center mb-20 mt-10"><a className="Event_img bg-brightest hover:bg-rose-900 rounded-md px-4 py-4" href="/Evenementen">Bekijk alle evenementen</a></div>
    </div>
    </>;
}
