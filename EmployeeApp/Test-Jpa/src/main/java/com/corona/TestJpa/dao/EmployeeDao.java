package com.corona.TestJpa.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corona.TestJpa.entity.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Long> {
	
	

}
