package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.Student;
import com.example.demo.Repository.StudentRepository;
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
    public boolean createStudent(Student student) {
        return studentRepository.save(student) != null? true:false;
    }
    public Student updateStudent(Student student) {
      return studentRepository.saveAndFlush(student);
    }
    public void deleteStudent(int id) {
        
    	studentRepository.deleteById(id);
    }
}