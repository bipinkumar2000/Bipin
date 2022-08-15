package com.corona.TestJpa.service.EmployeeServiceImplementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corona.TestJpa.dao.EmployeeDao;
import com.corona.TestJpa.entity.Employee;
import com.corona.TestJpa.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public void addEmployee(Employee employee) {
		employeeDao.save(employee);
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeDao.findAll();
	}

	@Override
	public void deleteEmployee(long id) {
		employeeDao.deleteById(id);
	}

	@Override
	public Optional<Employee> getEmployee(long id) {
		var temp = employeeDao.findById(id);
		return temp;
	}

}
