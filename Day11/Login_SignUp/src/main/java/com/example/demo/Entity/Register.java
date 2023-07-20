package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register_user")
public class Register {
    @Id
    private String username;
    private String email;
    private String password;

 
    public void setUsername(String username) {
        this.username=username;
    }
   
    public void setEmail(String email) {
        this.email = email;
    }
   
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getUsername() {
        return username;
    }
    
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    
}
