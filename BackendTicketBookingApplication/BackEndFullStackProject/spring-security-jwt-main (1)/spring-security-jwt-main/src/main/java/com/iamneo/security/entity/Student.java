package com.iamneo.security.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="adminn")
public class Student {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String movie;
    private String time;
    private String date;
    private String district;
    private String theater;
    private String imageurl;
    public Student() {
    }
    public Student(long id,String movie, String time,  String date,String district,String theater,String imageurl ) {
    	this.id=id;
        this.movie=movie;
        this.time = time;
        this.date = date;
        this.district = district;
        this.theater=theater;
        this.imageurl=imageurl;
    }

    // getters and setters
    public long getId() {
        return id;
    }
    public void setId(long id) {
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
    public String getImageurl() {
        return imageurl;
    }
    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }
}
