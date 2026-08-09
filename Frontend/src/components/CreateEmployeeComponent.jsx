import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  const navigate = useNavigate();  
  const { id } = useParams();

  useEffect(() => {
    if (id !== '_add') {
      EmployeeService.getEmployeeById(id)
        .then(res => {
          const { firstName, lastName, emailId } = res.data;
          setFirstName(firstName);
          setLastName(lastName);
          setEmailId(emailId);
        })
        .catch(err => console.error('Error fetching employee:', err));
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    if (id === '_add') {
      EmployeeService.createEmployee(employee)
        .then(() => navigate('/employees'))   
        .catch(err => console.error('Error creating employee:', err));
    } else {
      EmployeeService.updateEmployee(employee, id)
        .then(() => navigate('/employees'))  
        .catch(err => console.error('Error updating employee:', err));
    }
  };

  const cancel = () => navigate('/employees');

  const getTitle = () => (
    <h3 className="text-center">
      {id === '_add' ? 'Add Employee' : 'Update Employee'}
    </h3>
  );

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form onSubmit={saveOrUpdateEmployee}>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
