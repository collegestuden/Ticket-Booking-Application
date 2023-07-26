package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.*;
import com.example.demo.Repository.*;
@Service
public class FeedService {
    @Autowired
    private FeedRepository studentRepository;
    public List<FeedModel> getAllStudents() {
        return studentRepository.findAll();
    }
    public FeedModel getStudentById(Integer id) {
        return studentRepository.findById(id).get();
    }
    public boolean createStudent(FeedModel student) {
        return studentRepository.save(student) != null? true:false;
    }
    public FeedModel updateStudent(FeedModel student) {
      return studentRepository.saveAndFlush(student);
    }
    public void deleteStudent(int id) {
        
    	studentRepository.deleteById(id);
    }
}