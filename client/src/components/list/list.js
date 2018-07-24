import React from 'react';
import './list.scss';
const List = (props) => {

    const GenerateItems = () => {
        return props.items.map( (item, i) => {
            return (
                <li className = "list-item" key={i}>{props.items[i]}</li>
            )
        })
    }

    return (
        <div className="list">
            <h4 className = "list-title">{props.title}</h4>
            <ul className="ul-list">
                {GenerateItems()}
            </ul>
        </div>
    )
}

export default List;