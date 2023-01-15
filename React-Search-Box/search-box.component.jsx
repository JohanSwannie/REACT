import React from 'react';
import "./search-box.styles.css";

class SearchBox extends React.Component {
    render() {
        const { className, placeholder, onChangeHandler } = this.props;
        return (
            <div>
                <input 
                    className={`search-box ${className}`} 
                    type="search" 
                    placeholder={placeholder} 
                    onChange={onChangeHandler} />
            </div>
        )
    }
}

export default SearchBox;