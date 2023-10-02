package com.wahoweb.rental.car.service;

import com.wahoweb.rental.car.dao.CarRepo;
import com.wahoweb.rental.car.dao.ReviewRepo;
import com.wahoweb.rental.car.dao.UserRepo;
import com.wahoweb.rental.car.dto.ReviewDTO;
import com.wahoweb.rental.car.entity.Car;
import com.wahoweb.rental.car.entity.Review;
import com.wahoweb.rental.car.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Optional;


@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewRepo reviewRepo;
    @Autowired
    private CarRepo carRepo;
    @Autowired
    private UserRepo userRepo;

    private Review tdo2entity(ReviewDTO reviewTDO){
        Review review = new Review();
        review.setReviewId(reviewTDO.getReviewId());
        review.setComment(reviewTDO.getComment());
        review.setRating(reviewTDO.getRating());
        review.setDatePosted(reviewTDO.getDatePosted());
        Car car = carRepo.findById(reviewTDO.getCarId());
        review.setCar(car);
        Optional<User> user = userRepo.findById(reviewTDO.getUserId());
        review.setUser(user.get());
        return review;
    }
    @Override
    public Review addReview(ReviewDTO reviewTDO) {
        Review review = tdo2entity(reviewTDO);
        reviewRepo.save(review);
        int n = (reviewRepo.findReviewsByCarCarId(review.getCar().getCarId()).isEmpty()) ? 1 : reviewRepo.findReviewsByCarCarId(review.getCar().getCarId()).size();
        System.out.println(n);
        double rating = (reviewTDO.getRating() + Double.parseDouble(review.getCar().getRating()))/(n+1);
        review.getCar().setRating("" +  new DecimalFormat("#.#").format(rating));
        carRepo.save(review.getCar());
        return review;
    }

    @Override
    public void updateReview(ReviewDTO reviewTDO) {
        Review review = tdo2entity(reviewTDO);
        reviewRepo.save(review);
    }

    @Override
    public List<Review> getReviewByCarId(int carId) {
        return reviewRepo.findReviewsByCarCarId(carId);
    }

    @Override
    public void deleteReview(int reviewId) {
        reviewRepo.deleteById(reviewId);
    }
}
