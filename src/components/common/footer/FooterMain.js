import logo from "../../../assets/img/logo/logo2-trans.png";

function FooterMain() {
  return (
    <>
      <footer className="footer_sec">
        <div className="row">
          <div className="col">
            <div className="significance">
              <div className="m-auto ">
                <img src={logo} alt="" className="mw-140 h-40px h-md-40px" />
                
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="significance">
              <div className="m-auto ">
               
                <p className="text-white significance-text fs-6 mt-2">
                  we understand the significance of finding a life partner who
                  shares your values, beliefs, and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#FFBABA] p-2">
        <div className="text-[#737373] text-sm text-center">
          All Rights Reserved to Nikah Mubarak.
        </div>
        <div className="text-[#737373] text-sm text-center">
          <strong>Powered By: </strong>
          <a className="font-medium" href="https://www.abarissoftech.com/">
            Abaris Soft
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterMain;
