package com.wahoweb.rental.car.controller;

import com.wahoweb.rental.car.dto.BookingDTO;
import com.wahoweb.rental.car.dto.CarDTO;
import com.wahoweb.rental.car.entity.Booking;
import com.wahoweb.rental.car.entity.Car;
import com.wahoweb.rental.car.service.BookingService;
import com.wahoweb.rental.car.service.CarService;
import com.wahoweb.rental.car.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/booking")
@CrossOrigin("http://localhost:4200")
public class BookingController {
    @Autowired
    private BookingService bookingService;
    @Autowired
    private CarService carService;
    @Autowired
    private EmailService emailService;
    @PostMapping
    public ResponseEntity doBooking(@RequestBody BookingDTO bookingDto) {
        bookingService.confirmBooking(bookingDto);
        Car car = carService.getCar(bookingDto.getCarId());
        String message = "Booking made by : " + bookingDto.getUserName()
                + "\nEmail : " + bookingDto.getCustomerEmail()
                + "\nPhone Number : " + bookingDto.getUserPhone()
                + "\nStart Address : " + bookingDto.getPickLocation()
                +"\nEnd Address : " + bookingDto.getEndLocation()
                + "\n\nBooking Details : \n ";
        String details = "Car Id : " + bookingDto.getCarId()
                + "\n Car: " + car.getName()
                + "\nBooking start Date : " + bookingDto.getBookStartDate()
                + "\nBooking end Date : " + bookingDto.getBookEndDate()
                +"\nTotal : " + bookingDto.getTotal() + "Euro";
        message += details;
        emailService.sendEmail("elallam11.soufiane@gmail.com", "Booking notification", message);
        List<Car> cars = carService.getAllCars();
        Car cartmp = null;
        for (Car item: cars) {
            if(item.getCarId() == bookingDto.getCarId()) cartmp = item;
        }
        return new ResponseEntity("An email has been sent", HttpStatus.OK);
    }

    @GetMapping(value="/customer/{custId}")
    public List<Booking> getCustomerBooking(@PathVariable int customerId) {
        return bookingService.getCustomerBooking(customerId);
    }

    @GetMapping
    public List<Booking> getBookings(){
        return bookingService.getBookings();
    }

    @GetMapping(value="/car/{carId}")
    public Booking getCarBooking(@PathVariable int carId) {
        return bookingService.getCarBooking(carId);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable("bookingId") int bookingId){
        System.out.println("deleting Booking " + bookingId);
        bookingService.deleteBooking(bookingId);
    }
}
