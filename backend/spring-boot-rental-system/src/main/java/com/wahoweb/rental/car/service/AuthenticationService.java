package com.wahoweb.rental.car.service;

import com.wahoweb.rental.car.controller.AuthenticationRequest;
import com.wahoweb.rental.car.controller.AuthenticationResponse;
import com.wahoweb.rental.car.controller.RegisterRequest;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {

    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse authenticate(AuthenticationRequest request);


}
