package com.corona.TestJpa.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corona.TestJpa.entity.Employee;
import com.corona.TestJpa.service.EmployeeService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/testjpa")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("")
	public void addEmployee(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);
	}
	@GetMapping("")
	public ResponseEntity<List<Employee>> getEmployees() {
		var value=employeeService.getEmployees();
		return ResponseEntity.ok(value);
	}
	@GetMapping("/{id}")
	public Optional<Employee> getEmployee(@PathVariable("id") long id) {
		return employeeService.getEmployee(id);
	}
}
