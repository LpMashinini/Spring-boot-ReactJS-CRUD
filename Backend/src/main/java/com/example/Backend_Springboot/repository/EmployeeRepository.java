package com.example.Backend_Springboot.repository;

import com.example.Backend_Springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
