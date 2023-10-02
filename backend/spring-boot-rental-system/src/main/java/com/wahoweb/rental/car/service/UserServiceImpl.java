package com.wahoweb.rental.car.service;

import com.wahoweb.rental.car.dao.UserRepo;
import com.wahoweb.rental.car.dto.UserDTO;
import com.wahoweb.rental.car.entity.Role;
import com.wahoweb.rental.car.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;
    @Override
    public User checkLogin(UserDTO dto) {
        return userRepo.findByLogin(dto.getLogin());
    }

    @Override
    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setLogin(userDTO.getLogin());
        user.setPassword(userDTO.getPassword());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setAddress(userDTO.getAddress());
        user.setRole(Role.USER);
        System.out.println(user.getLogin());
        if(userRepo.findByLogin(user.getLogin()) != null){
            System.out.println("User already exist");
            return null;
        }
        else{
            System.out.println("New User");
            userRepo.save(user);
            return user;
        }
    }
}
