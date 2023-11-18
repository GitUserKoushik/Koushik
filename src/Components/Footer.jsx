import React from 'react'
import './Foot.css';

export default function Footer() {
  return (
    <div>
    <div id="belowfoot">
          <div className="footup">
           <div className="bfcon" id="bfconcrt">
            <h3>Certifications :</h3>
             <div id="bfconcrtlst">ABC certified <br />XYZ certified <br />ISO certified <br />TDG certified <br />KFY certified <br />JHYF certified <br />YFU certified</div>
           </div>
           <div className="bfcon" id="bfconflu">
            <h3>Follow Us :</h3>
            <div id="bfconcrtlst">Facebook <br />Instagram <br />Tweeter <br />Whatsapp <br />Youtube <br />Telegram <br />Discord</div>
           </div>
           <div className="bfcon" id="bfcon3aw">
            <h3>Awards :</h3>
            <div id="bfconcrtlst">National Awards 2018 <br />International Awards 2022 <br />National Considerations 2023 <br />National Awards 2019 <br />National Awards 2020 <br />National Awards 2021 <br />National Awards 2022</div>
           </div>
           <div className="bfcon" id="bfcon4tac">
            <h3>Terms and Conditions :</h3>
            <div id="bfconcrtlst">Condition 1 <br />Condition 2<br />Condition 3 <br />Condition 4 <br />Condition 5 <br />Condition 6 <br />Condition 7</div>
           </div>
           </div>
           {/* <hr /> */}
           <br /> <br />
           Copyright Statement of Rights || All Rights Reserved | Some Rights
        Reserved.
        </div>
    </div>
  )
}
