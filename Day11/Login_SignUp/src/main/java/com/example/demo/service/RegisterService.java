
package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Register;
import com.example.demo.repository.RegisterRepo;
@Service
public class RegisterService {
    @Autowired
    RegisterRepo employeeRepo;
    public boolean addEmployee(Register employee)
    {
        return employeeRepo.save(employee)!=null?true:false;
    }
    public List <Register> getAllEmployees()
    {
        return employeeRepo.findAll();
    }
    public Register getEmployeeById(int id)
    {
        return employeeRepo.findById(id).get();
    }
    }





