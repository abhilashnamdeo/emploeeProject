import React, { Component } from 'react'

class Employee extends Component {
    constructor(props) {
        super(props);
    }
    state = {
      Employee:[{
        firstName : "",
        lastName: "",
        dob:"",
        experience:""
      }]
    }
    btnAddEmployee = () =>{
        this.setState({"Employee": [...this.state.Employee, 
            {
                firstName: "John",
                lastName: "Devis",
                dob:"15-12-2000",
                experience: "2 Years"
            }
        ]});
    }
    render() {
        return ( 
        <>
        <h2 className="text-center">Employee Details</h2>
        <button onClick={this.btnAddEmployee}>Add Employee</button>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Experience</th>
            </tr>
           
            {this.state.Employee.map((emp)=>{
                 return(<tr>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.firstdob}</td>
                    <td>{emp.experience}</td>
                </tr>);
            })}
            
        </table>
        </>
        );
    }

}

export default Employee;