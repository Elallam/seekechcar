package com.wahoweb.rental.car.controller;

import com.wahoweb.rental.car.dto.CarDTO;
import com.wahoweb.rental.car.dto.WishlistDTO;
import com.wahoweb.rental.car.entity.Car;
import com.wahoweb.rental.car.service.CarService;
import com.wahoweb.rental.car.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping("/car")
@CrossOrigin("http://localhost:4200")
public class CarController {
    @Autowired
    private CarService carService;

    @Autowired
    private WishlistService wishlistService;

    @PostMapping
    public Car addCar(@Validated @RequestBody CarDTO carDto) {
        return carService.addCar(carDto);
    }

    @GetMapping(value = "/registration/{carId}")
    public Car getCar(@PathVariable int carId) {
        System.out.println(carService.getCar(carId));
        return carService.getCar(carId);
    }


    @GetMapping
    public List<Car> getAllCar() {
        return carService.getAllCars();
    }

    @PutMapping
    public void updateCar(@RequestBody CarDTO carDto) {
        carService.updateCar(carDto);
    }

    @DeleteMapping(value = "/{registrationNo}")
    public void deleteCar(@PathVariable String registrationNo) {
        carService.deleteCar(registrationNo);
    }

    @GetMapping("/searchBy/{name}/{model}/{minPrice}/{maxPrice}")
    public List<Car> searchBy(@PathVariable String name,
                              @PathVariable String model,
                              @PathVariable double minPrice,
                              @PathVariable double maxPrice){
        return carService.searchBy(name, model, minPrice, maxPrice);
    }

    @GetMapping("/searchByName/{name}/{minPrice}/{maxPrice}")
    public List<Car> searchByName(@PathVariable String name,
                              @PathVariable double minPrice,
                              @PathVariable double maxPrice){
        return carService.searchByName(name, minPrice, maxPrice);
    }

    @GetMapping("/searchByModel/{model}/{minPrice}/{maxPrice}")
    public List<Car> searchByModel(
                              @PathVariable String model,
                              @PathVariable double minPrice,
                              @PathVariable double maxPrice){
        return carService.searchByModel(model, minPrice, maxPrice);
    }

    @GetMapping("/searchBy/{minPrice}/{maxPrice}")
    public List<Car> searchBy(
                              @PathVariable double minPrice,
                              @PathVariable double maxPrice){
        return carService.searchByPrice(minPrice, maxPrice);
    }

    @GetMapping("/searchByKeyWord/{keyword}")
    public List<Car> searchByKeyword(@PathVariable String keyword){
        return carService.searByKeyWord(keyword);
    }

    @PostMapping("/addToFav")
    public void addToWishList(@PathVariable WishlistDTO wishlistDTO){
        System.out.println("Add to wishList Called");
        wishlistService.addToWishlist(wishlistDTO);
    }

    @PostMapping("/deleteFav")
    public void removeFromWishList(@PathVariable WishlistDTO wishlistDTO){
        wishlistService.removeFromWishlist(wishlistDTO);
    }


}
