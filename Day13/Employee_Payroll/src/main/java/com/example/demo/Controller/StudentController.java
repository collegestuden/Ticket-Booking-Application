package com.example.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Model.Student;
import com.example.demo.Service.ApiService;
@CrossOrigin
@RestController

public class StudentController {
    @Autowired
    private ApiService apiService;
    @GetMapping("/get")
    public List<Student> getAllStudents() {
        return apiService.getAllStudents();
    }
    /*@GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        return apiService.getStudentById(id);
    }
    */
    @PostMapping("/post")
    public boolean createStudent(@RequestBody Student student) {
        return apiService.createStudent(student);
    }
    @PutMapping("/put")
    public Student updateStudent( @RequestBody Student student) {
        return apiService.updateStudent(student);
    }
    @DeleteMapping("/delete/{taskid}")
    public String deleteStudent(@PathVariable("taskid") int taskid) {
    	apiService.deleteStudent(taskid);
       return "Details Deleted";
    }
}