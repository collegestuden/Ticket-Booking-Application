package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin_accesss")
public class Student {
    @Id
    private int id;
    private String movie;
    private String time;
 
    private String date;
    private String district;
    private String theater;
    public Student() {
    }
    public Student(int id,String movie, String time,  String date,String district,String theater ) {
    	this.id=id;
        this.movie=movie;
        this.time = time;
        
        this.date = date;
        this.district = district;
        this.theater=theater;
    }

    // getters and setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getMovie() {
        return movie;
    }
    public void setMovie(String movie) {
        this.movie = movie;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
   
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getDistrict() {
        return district;
    }
    public void setDistrict(String district) {
        this.district = district;
    }
    public String getTheater() {
        return theater;
    }
    public void setTheater(String theater) {
        this.theater = theater;
    }
}
