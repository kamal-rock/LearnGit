package com.restapi.springbootrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restapi.springbootrestapi.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
	

}
