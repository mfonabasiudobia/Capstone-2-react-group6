import React from "react";

const Table = (props) => {
    {console.log(props.data)}
    return(
          <div>
              <table border={1}>
                 <thead> 
                  <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Phone</th>
                      <th>Address</th>
                  </tr>
                 </thead>
                 
                 <tbody> 
                   {props.data.map(item => {
                       return (
                           <tr key={item.key}>
                              <td>{item.firstname}</td>
                              <td>{item.lastname}</td>
                              <td>{item.phone}</td>
                              <td>{item.address}</td>
                           </tr>
                       )
                   })}
                 </tbody> 
              </table>
          </div>
    )
}

export default Table;