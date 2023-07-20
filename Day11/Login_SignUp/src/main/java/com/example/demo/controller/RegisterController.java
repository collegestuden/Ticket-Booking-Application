
package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Register;
import com.example.demo.service.RegisterService;

@CrossOrigin
@RestController
public class RegisterController {
@Autowired(required=true)

 RegisterService employeeService; 
@PostMapping("/")
public boolean addEmployee(@RequestBody Register employee)
{
   return employeeService.addEmployee(employee);
}
@GetMapping("/")
public List <Register> getAllEmployees()
{
    return employeeService.getAllEmployees();
}
@GetMapping("/{id}")
public Register getEmployeeById(@PathVariable int id)
{
    return employeeService.getEmployeeById(id);
}
}

