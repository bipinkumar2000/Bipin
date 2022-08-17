package com.corona.TestJpa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.corona.TestJpa.entity.Employee;

@Service
public interface EmployeeService {
	

	public ResponseEntity<Boolean> addEmployee(Employee employee);

	public List<Employee> getEmployees();

	public ResponseEntity<Optional<Employee>> getEmployee(long id);

	public ResponseEntity<Boolean> deleteEmployee(long id);

}
