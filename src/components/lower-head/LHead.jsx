import './lhead.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function LHead(){
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [open, setOpen] = useState(false);
  // const [check, setCheck] = useState("Check-in - Check-out");
  const [city, setCity] = useState("");

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults:1,
    children:0,
    room:1
  });

  const handleOptions = (name, op) =>{
    setOptions(prev=>{
      return{
        ...prev,
        [name] : op==="i"? options[name]+1 : options[name] - 1
      }
      
    })
  }

  const navigate = useNavigate();
  const handleSearch = () =>{
    navigate('/hotels', {state: {city, date, options}});
  }

    return (
      <div className="lhead">
        <div className="lheadContainer">
            <p className="title">Find your next stay</p>
            <p className="desc">Search deals on hotels, homes, and much more...</p>
        </div>
        <div className="searchBar">
          <div className="searchItem">
            <FontAwesomeIcon icon={faBed} className="searchIcons"/>
            <input type="text" name="searchCity" id="searchCity" placeholder='Where are you going?' onChange={(e) => {setCity(e.target.value)}}/>
          </div>

          <div className="searchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="searchIcons"/>
            <span className="searchText" onClick={()=>setOpen(!open)}>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {open && <DateRange
              editableDateInputs={true}
              onChange={item => {setDate([item.selection])}}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={date}
              className="date"
            />}
          </div>

          <div className="searchItem">
            <FontAwesomeIcon icon={faPerson} className="searchIcons"/>
            <span className="searchText" onClick={()=>setOpenOptions(!openOptions)}>{options.adults} {options.adults>1?"adults":"adult"} · {options.children} {options.children===1?"child":"children"} · {options.room} {options.room>1?"rooms":"room"}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adults</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.adults<=1} onClick={()=>handleOptions("adults", "d")}>-</button>
                  <span className="optionNum">{options.adults}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("adults", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.children<=0} onClick={()=>handleOptions("children", "d")}>-</button>
                  <span className="optionNum">{options.children}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("children", "i")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.room<=1} onClick={()=>handleOptions("room", "d")}>-</button>
                  <span className="optionNum">{options.room}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div>
            }
          </div>

          <div className="searchItem">
            <button className="searchBtn" onClick={()=>{handleSearch()}}>Search</button>
          </div>

        </div>
      </div>
    )
  }
  
  export default LHead;