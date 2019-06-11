import React, { Component } from 'react';



class MyComponent extends Component {

    render() {

        let btnStyles = {
            marginLeft: 20
        }

        let items;
        if(!this.props.searching) {

            items = this.props.items.map((item) => {

                return <li onClick={() => this.props.onRemove(item.key)} style={{width: "500", padding: 10, listStyleType: "none"}} key={item.key}>{item.task}</li>

            });
        }

        else {

            items = this.props.searchedItems.map((item) => {

                return <li onClick={() => this.props.onRemove(item.key)} style={{width: "500", padding: 10, listStyleType: "none"}} key={item.key}>{item.task}</li>

            });
        }


        return(
            <div>
                <input placeholder="todo" onChange={this.props.onChange} type="text"  />
                <button onClick={this.props.onAdd} style={btnStyles} >Add Todo</button>
                <input placeholder="search" style={{marginLeft: 20}} type="text" onChange={this.props.onSearch}/>
                <ul>

                    {items}
                </ul>
            </div>
        );
    }
}


export default MyComponent;
