import React, {Component} from "react";
import Table from "./Table";

class Members extends Component{
   constructor(props){
       super(props);
       this.state = {
           members: []
       }
   }

   componentDidMount(){
        fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
        .then(response => response.json())
        .then(data => {
           let newData = data.data;
           this.setState({
               members: newData
           })
        })
        .catch(err => console.log(err));
   }

  render(){
            return(
                <div>
                <h1>Hello</h1>
                <Table data={this.state.members}/>
                </div>
              )
        }
    }
         

{/* <Table data={member}/> */}

export default Members;