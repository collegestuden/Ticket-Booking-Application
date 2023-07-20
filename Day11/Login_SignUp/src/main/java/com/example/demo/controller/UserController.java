
package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.User;
import com.example.demo.service.UserService;

@CrossOrigin
@RestController
public class UserController {
@Autowired(required=true)

 UserService employeeService; 
@PostMapping("/")
public boolean addEmployee(@RequestBody User employee)
{
   return employeeService.addEmployee(employee);
}
@GetMapping("/")
public List <User> getAllEmployees()
{
    return employeeService.getAllEmployees();
}
/*
@GetMapping("/{id}")
public User getEmployeeById(@PathVariable int id)
{
    return employeeService.getEmployeeById(id);
}
*/
}

