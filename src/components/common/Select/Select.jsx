import React, {useState} from 'react';
import PropTypes from 'prop-types';

// import css from './Select.module.scss'

const Select = ({css , children}) => {

const [select, setSelect] = useState(0)
const [selectAll, setSelectAll] = useState([])
const [search, setSearch] = useState("")


const handleSelect = () => {
    console.log("select One");
}
const handleSelectAll = () => {
    console.log("select All");
}
const handleSearch = () => {

}
    return (
        <>
            <select className={css.select}>
            {children}
                <option onChange={handleSearch}>
                    search
                    {/* <>{children}</> */}
                  
                    {/* {console.log(children, "children")} */}
                {/* <input
                type="text"
                // className="form-control"
                placeholder="Client name"
                aria-label="Client name"
                aria-describedby="button-addon2"
                id="item"
                /> */}

                </option>
                <option onClick={handleSelectAll}>All</option>
                <option onClick={handleSelect}>11:00</option>
                <option onClick={handleSelect}>11:30</option>
                <option onClick={handleSelect}>12:00</option>
                <option onClick={handleSelect}>12:30</option>
            </select>
        </>
    );
}
Select.propTypes = {
    css: PropTypes.shape(
        PropTypes.string.isRequired
    ).isRequired,
}

export default Select;