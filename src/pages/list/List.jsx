import './list.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../../components/SearchItem/SearchItem';
import { Mail } from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

function List() {

  const location = useLocation();
  console.log(location);
  const [val, setVal] = useState(location.state.city);
  const [date,setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const handleOptions = (name, op) =>{
    setOptions(prev=>{
      return{
        ...prev,
        [name] : op==="i"? options[name]+1 : options[name] - 1
      }
      
    })
  }


  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const diff = (date[0].endDate.getTime() - date[0].startDate.getTime())/(1000 * 60 * 60 * 24);   
  return (
    <div>
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="ipfields">
              <label>Destination/property name:</label>
              <input type="text" name="" id="" value={val} onChange={e => setVal(e.target.value)} />
            </div>
            <div className="ipfields">
              <label>Check-in date</label>
              <span onClick={()=>setOpenStart(!openStart)}> {`${format(date[0].startDate, "EEEE, MMMM dd, yyyy")}`} </span>
              
              {openStart && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="ipfields">
              <label>Check-out date</label>
              <span onClick={()=>setOpenEnd(!openEnd)}> {`${format(date[0].endDate, "EEEE, MMMM dd, yyyy")}`} </span>
              {openEnd && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="ipfields">
              <label>{diff}-night stay</label>
              <span className="ipfieldsItem" onClick={()=>setOpenOptions(!openOptions)}>{options.adults} {options.adults>1?"adults":"adult"} · {options.children} {options.children===1?"child":"children"} · {options.room} {options.room>1?"rooms":"room"}</span>
            {openOptions && <div className="ipOptions">
              <div className="ipOptionItem">
                <span className="ipOptionText">Adults</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.adults<=1} onClick={()=>handleOptions("adults", "d")}>-</button>
                  <span className="optionNum">{options.adults}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("adults", "i")}>+</button>
                </div>
              </div>

              <div className="ipOptionItem">
                <span className="ipOptionText">Children</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.children<=0} onClick={()=>handleOptions("children", "d")}>-</button>
                  <span className="optionNum">{options.children}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("children", "i")}>+</button>
                </div>
              </div>

              <div className="ipOptionItem">
                <span className="ipOptionText">Rooms</span>
                <div className="optionCounter">
                  <button className="optionBtn" disabled={options.room<=1} onClick={()=>handleOptions("room", "d")}>-</button>
                  <span className="optionNum">{options.room}</span>
                  <button className="optionBtn" onClick={()=>handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div>
            }
            </div>

            <button>Search</button>
          
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
      <Mail/>
      <Footer/>
    </div>
  )
}

export default List;