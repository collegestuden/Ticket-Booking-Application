package com.iamneo.security.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Student;
import com.iamneo.security.service.ApiService;

import lombok.RequiredArgsConstructor;
@CrossOrigin(origins="*")
@RestController
@RequiredArgsConstructor
public class StudentController {
    private final ApiService apiService;
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
    public Student createStudent(@RequestBody Student student) {
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