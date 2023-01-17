import "../tailwind.css";
export function EvenementenHP() {
    return <>
    <img id="HomeImg_Id" src="https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_1280.jpg" alt="" />
    <div>
    <h2 id="EventTussenKopje" className="text-center my-4 text-4xl">Evenementen</h2>

    <div className="flex justify-center content-around" id="flex1">
              <div className="container mx-2 rounded-md">
                <a href="/Evenementen" id="Chinese_New _Years"><img className=" Event_imgh rounded-2xl" src="https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_1280.jpg" alt="Link en een foto van een asian celebration evenement"/></a>
                <div class="middle">
                <div class="text">
                  <h3>Chinese Celebration</h3>
                  <p>Small description</p></div>
                </div>
                </div>
              
              <div className="container mx-2 rounded-md">
                <a href="/Evenementen" id="TheWalkingDead"><img className=" Event_imgh rounded-2xl" src="https://cdn.pixabay.com/photo/2016/09/13/07/35/walking-dead-1666584_1280.jpg" alt="Link en een foto van the walking dead evenement"/></a>
                <div class="middle">
                <div class="text">
                  <h3>The Walking Dead</h3>
                  <p>Small description</p>
                </div>
              </div>
              </div>
              
              <div className="container mx-2 rounded-md">
                <a href="/Evenementen" id="StepUp5"><img className="Event_imgh rounded-2xl" src="https://cdn.pixabay.com/photo/2014/08/29/05/00/dance-430554_1280.jpg" alt="" /></a>
                <div class="middle">
                <div class="text">
                  <h3>Step Up 5</h3>
                  <p>Small description </p>
                  </div>
              </div>
              </div>
              
    </div>
    <div className="text-center mb-28 mt-10"><a className="Event_img bg-brightest hover:bg-rose-900 rounded-md px-4 py-4" href="/Evenementen">Bekijk alle evenementen</a></div>
    </div>
    </>;
}