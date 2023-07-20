
package com.example.demo.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.User;
import com.example.demo.repository.UserRepo;
@Service
public class UserService {
    @Autowired
    UserRepo employeeRepo;
    public boolean addEmployee(User employee)
    {
        return employeeRepo.save(employee)!=null?true:false;
    }
    public List <User> getAllEmployees()
    {
        return employeeRepo.findAll();
    }
    public User getEmployeeById(int id)
    {
        return employeeRepo.findById(id).get();
    }
    }





