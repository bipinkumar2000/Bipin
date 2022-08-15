package com.corona.TestJpa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.corona.TestJpa.entity.Employee;

@Service
public interface EmployeeService {
	

	public void addEmployee(Employee employee);

	public List<Employee> getEmployees();

	public Optional<Employee> getEmployee(long id);

	public void deleteEmployee(long id);

}
