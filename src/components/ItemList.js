
import React from 'react';
import Item from './Item';
function ItemList(props) {

    const items = props.items.map((item) =>
        <Item
            title={item.title}
            
            publishedAt={item.publishedAt}
            onclick={() => (props.onclick(item))}
        />);
    return (
        <div id="itemList">
            {items}
        </div>
    )
}
export default ItemList;
