import React from "react";

const searchbox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input className="ma4 pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search robots" 
            onChange={searchChange}
            />
        </div>
    )
}

export default searchbox