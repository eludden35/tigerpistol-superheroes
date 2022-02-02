import React from 'react';

const Tabheader = (props) => {

    const { currentTab, index, whenClicked } = props;

    const isSelectedStyle = {
        backgroundColor: 'grey',
        display: 'inline-block',
        width: '150px'
    }

    const notSelectedStyle = {
        // backgroundColor: 'grey',
        display: 'inline-block',
        width: '150px'
    }

    return(
        <button className='btn btn-primary m-3' style={ currentTab.selected ? isSelectedStyle : notSelectedStyle } onClick={() => whenClicked(index)}>
            {currentTab.title}
        </button>
    );
}

export default Tabheader;