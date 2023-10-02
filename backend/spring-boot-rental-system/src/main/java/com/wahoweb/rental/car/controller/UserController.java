package com.wahoweb.rental.car.controller;

import com.wahoweb.rental.car.dto.UserDTO;
import com.wahoweb.rental.car.entity.User;
import com.wahoweb.rental.car.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authUser")
@CrossOrigin("http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity registerUser(@RequestBody UserDTO dto) {
        userService.registerUser(dto);
        return ResponseEntity.ok("Register successfully");
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody UserDTO userDTO){
        userService.checkLogin(userDTO);
        return ResponseEntity.ok("OK");
    }
}
