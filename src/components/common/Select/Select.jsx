import React, {useState} from 'react';
import PropTypes from 'prop-types';

// import css from './Select.module.scss'

const Select = ({css}) => {

const [select, setSelect] = useState(0)
const [selectAll, setSelectAll] = useState([])
const [search, setSearch] = useState("")


const handleSelect = ()=>{
    
}
const handleSelectAll = ()=>{

}
const handleSearch = ()=>{

}



    return (
        <>
            <select className={css.select}>
                <option onChange={handleSearch}>search</option>
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