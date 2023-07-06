import './HoursOfOperation.css';
import hours from "../media/hours.png";

function HoursOfOperation() {
  return (
    <div className="HoursOfOperation" style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
      <div>
        <img src={hours} alt="" style={{ position: "relative", width: "100%" }} />
        <h5 style={{ color: "white", textAlign: "center", position: "absolute", top: "25%", width: "100%" }} >Hours Of Operation</h5>
      </div>
      <div style={{ display: "flex", margin: "4rem" }} >
            <div>
              <p className='bottomPadHours'>Monday:</p>
              <p className='bottomPadHours'>Tuesday:</p>
              <p className='bottomPadHours'>Wednesday:</p>
              <p className='bottomPadHours'>Thursday:</p>
              <p className='bottomPadHours'>Friday:</p>
            </div>
            <div style={{marginLeft: "1rem"}} >
              <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
              <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
              <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
              <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
              <p className='bottomPadHours'>8:00 am - 4:30 pm</p>
            </div>
          </div>
    </div>
  );
}

export default HoursOfOperation;
