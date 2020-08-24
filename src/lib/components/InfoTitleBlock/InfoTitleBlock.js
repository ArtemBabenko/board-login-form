import React from 'react';
import './info_title_block.scss';


export default function HeaderInfo(props) {
    return (
        <div>
            <h1 className='main-title'>
            <span>{props.infoBlock.title}</span>
            </h1>
            <p className='main-sub-title'>
                {props.infoBlock.info}
            </p>
        </div>
    )

}

//сайт объявлений
//Легко купить, легко продать