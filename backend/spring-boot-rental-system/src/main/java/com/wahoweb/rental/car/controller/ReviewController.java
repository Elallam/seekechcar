package com.wahoweb.rental.car.controller;

import com.wahoweb.rental.car.dto.ReviewDTO;
import com.wahoweb.rental.car.entity.Review;
import com.wahoweb.rental.car.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    @GetMapping("/{carId}")
    public List<Review> getReviews(@PathVariable int carId){
        return reviewService.getReviewByCarId(carId);
    }

    @PostMapping("/add")
    public ResponseEntity addReview(@RequestBody  ReviewDTO reviewDTO){
        System.out.print("A review has been added " + reviewDTO);
        reviewService.addReview(reviewDTO);
        return  ResponseEntity.ok("A review has been added successfully ");
    }

    @PutMapping("/edit")
    public ResponseEntity updateReview(@RequestBody ReviewDTO reviewDTO){
        reviewService.updateReview(reviewDTO);
        return ResponseEntity.ok("Review has been updated");
    }
}
