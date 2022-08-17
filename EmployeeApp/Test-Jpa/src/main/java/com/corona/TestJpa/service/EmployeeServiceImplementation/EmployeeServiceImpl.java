package com.corona.TestJpa.service.EmployeeServiceImplementation;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.corona.TestJpa.dao.EmployeeDao;
import com.corona.TestJpa.entity.Employee;
import com.corona.TestJpa.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public ResponseEntity<Boolean> addEmployee(Employee employee) {
		if(employee==null) {
			return new ResponseEntity<Boolean>(false,HttpStatus.NO_CONTENT);
		}
		try {
			employeeDao.save(employee);
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<Boolean>(false,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeDao.findAll();
	}

	@Override
	public ResponseEntity<Boolean> deleteEmployee(long id) {
		if(id==0) {
			return new ResponseEntity<Boolean>(false,HttpStatus.NO_CONTENT);
		}
		else {
			Optional<Employee> employee=employeeDao.findById(id);
			if(employee==null) {
				return new ResponseEntity<Boolean>(false,HttpStatus.NOT_FOUND);
			}
		}
		try{
			employeeDao.deleteById(id);
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<Boolean>(false,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Override
	public ResponseEntity<Optional<Employee>> getEmployee(long id) {
		if(id==0) {
			return new ResponseEntity<Optional<Employee>>(HttpStatus.NO_CONTENT);
		}
		else {
			Optional<Employee> employee=employeeDao.findById(id);
			if(employee==null) {
				return new ResponseEntity<Optional<Employee>>(HttpStatus.NOT_FOUND);
			}
		}
		try {
			Optional<Employee> employee=employeeDao.findById(id);
			return new ResponseEntity<Optional<Employee>>(employee,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<Optional<Employee>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

}
