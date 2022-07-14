import { useState } from "react";
import "../styles/searchbar.css";
import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";



const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const { t } = useTranslation();

    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);
    }

    return (
        
        <>
        
          <div className="searchbar-container">
              <div className="searchbar">
                 <input 
                 type="text"
                 placeholder= {t("BusP")} 
                 onChange={onChange} 
                 />
              </div>
              <div className="searchbar-btn">
                 <button onClick={onClick}>
                 {t("Bus")} 
                 </button>
              </div>
          </div>  
        </>
    )
}

export default Searchbar
