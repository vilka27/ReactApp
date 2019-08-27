import React from 'react';

function Item(props) {
    return (
        <div className='item' onClick={props.onclick}>
            {props.urlToImage ? <img src={props.urlToImage}/> : ''}
            <h2>{props.title}</h2>
            <div className={"item_desc"}>{props.description}
                {props.url ? <a href={props.url}> Читать далее</a> : ''}
            </div>
            <p> {props.publishedAt ? props.publishedAt.replace("T", " ").replace("Z", "") : ''}</p>
        </div>
    )
}
export default Item;