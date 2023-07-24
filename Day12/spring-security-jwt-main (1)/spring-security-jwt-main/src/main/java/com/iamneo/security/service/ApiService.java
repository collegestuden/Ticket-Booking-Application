package com.iamneo.security.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.iamneo.security.entity.*;
import com.iamneo.security.repository.*;

@Service
public class ApiService {
    @Autowired
    private StudentRepository studentRepository;
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student getStudentById(Integer id) {
        return studentRepository.findById(id).get();
    }
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }
    public Student updateStudent(Student student) {
      return studentRepository.saveAndFlush(student);
    }
    public void deleteStudent(int id) {
        
    	studentRepository.deleteById(id);
    }
}
