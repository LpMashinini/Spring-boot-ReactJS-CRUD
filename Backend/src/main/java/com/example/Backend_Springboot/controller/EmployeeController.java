package com.example.Backend_Springboot.controller;

import com.example.Backend_Springboot.exception.ResourceNotFoundException;
import com.example.Backend_Springboot.model.Employee;
import com.example.Backend_Springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //Get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //Create employee
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //Get employee by Id
    @GetMapping("/employees/{id}")
    public ResponseEntity< Employee > getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).
                orElseThrow( () -> new ResourceNotFoundException("Employee not exist with id : " + id));

        return ResponseEntity.ok(employee);
    }



}
