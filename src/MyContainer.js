import React, { Component } from 'react';
import MyComponent from "./MyComponent";


class MyContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            todoValue: '',
            searchedItems: [],
            searching: false
        }



    }

    addTodo = () => {
        if(this.state.todoValue) {
            let item = {
                task: this.state.todoValue,
                key: Date.now()
            }



            this.setState({
                searching: false,
                items: [...this.state.items, item]
            }, () => {

                console.log(this.state);

                // this.setState({
                //     ...this.state,
                    // todoValue: ''
                // })
            })
        }
    }

    onChange = (e) => {
        this.setState({searching: false})
        this.setState({
            todoValue: e.target.value
        })
    }

    onSearch = (e) => {
        this.setState({searching: true})
        var searchedFilteredItems = this.state.items.filter((item) => {
            return (item.task.includes(e.target.value));
        })
        this.setState({
            searchedItems: searchedFilteredItems
        })
    }


    onRemove = (key) => {
        var filteredItems = this.state.items.filter((item) => {
           return (item.key !== key )
        })

        this.setState({
            items: filteredItems
        })
    }

    render() {




      return(
           <MyComponent onChange={this.onChange}
                        onRemove={this.onRemove}
                        items={this.state.items}
                        searchedItems={this.state.searchedItems}
                        onAdd={this.addTodo}
                        onSearch={this.onSearch}
                        searching={this.state.searching}
           />
      );
    }
}




export default MyContainer;