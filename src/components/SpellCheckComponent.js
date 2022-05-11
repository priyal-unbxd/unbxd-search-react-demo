import React from 'react';
import {SpellCheck} from '@unbxd-ui/react-search-sdk'

const SpellCheckItemComponent = ({itemData,onClick}) =>{
    const {suggestion} = itemData;
    const handleClick = () => {
        onClick(itemData);
    };

    return (
        <div className='UNX-spellCheck__item'>
            Did you Mean<span className="-suggestion" onClick={handleClick} data-testid="UNX_spellCheck">{suggestion}</span>?
        </div>
    )
}

const SpellCheckComponent = ()=>{
    return <SpellCheck spellCheckItemComponent={SpellCheckItemComponent}/>
}

export default SpellCheckComponent