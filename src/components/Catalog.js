import React from 'react';
import ItemList from './ItemList';
import Item from './Item';
import getApiInfo from '../services/APIService';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                
            ],
            currentItem: null
        }
        getApiInfo(this);
    }
    setItem(it) {
        this.setState({items: this.state.items, currentItem: it});
    }
    render() {
        
        const item = this.state.currentItem;
        if (item !== null && item !== undefined) {
            return (
                <div id="catalog">
                    <button onClick={() => this.setItem(null)} id={"backButton"}>🡐</button>
                    <div id="bigItem">
                        <Item
                            title={item.title}
                            urlToImage={item.urlToImage}
                            publishedAt={item.publishedAt}
                            description={item.description}
                            url={item.url}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div id="catalog">
                    < ItemList
                        items={this.state.items}
                        onclick={(e) => (this.setItem(e))}
                    />
                </div>)
        }
    }
}

export default Catalog;
