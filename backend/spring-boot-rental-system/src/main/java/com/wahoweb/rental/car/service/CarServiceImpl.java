package com.wahoweb.rental.car.service;

import com.wahoweb.rental.car.dao.CarRepo;
import com.wahoweb.rental.car.dto.CarDTO;
import com.wahoweb.rental.car.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepo carRepository;

    @Override
    public Car addCar(CarDTO cardto) {
        return carRepository.save(getCar(cardto));
    }

    @Override
    public Car getCar(CarDTO cardto) {
        Car car = new Car();
        car.setCarId(cardto.getCarId());
        car.setAvailable(cardto.isAvailable());
        car.setMileage(cardto.getMileage());
        car.setName(cardto.getName());
        car.setModel(cardto.getModel());
        car.setRating(cardto.getRating());
        car.setFuelType(cardto.getFuelType());
        car.setImageDir(cardto.getImageDir());
        car.setLicenceNumber(cardto.getLicenceNumber());
        car.setRentPrice(cardto.getRentPrice());
        car.setTransmission(cardto.getTransmission());
        car.setNumberOfPassanger(cardto.getNumberOfPassanger());
        return car;
    }

    @Override
    public Car getCar(String licenceNumber) {
        return carRepository.findByLicenceNumber(licenceNumber);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public void updateCar(CarDTO carDto) {
        carRepository.save(getCar(carDto));
    }

    @Override
    public void deleteCar(String licenceNumber) {
        carRepository.deleteByLicenceNumber(licenceNumber);
    }

    @Override
    public Car getCar(int carId){
        return carRepository.findById(carId);
    }

    @Override
    public List<Car> searchBy(String name, String model, double minPrice, double maxPrice) {
        System.out.println(name + " " + model+ " " + minPrice +  " " + maxPrice);
        return carRepository.findBy(name, model, minPrice, maxPrice);
    }

    @Override
    public List<Car> searchByName(String name, double minPrice, double maxPrice) {
        return carRepository.findByName(name, minPrice, maxPrice);
    }

    @Override
    public List<Car> searchByModel(String model, double minPrice, double maxPrice) {
        return carRepository.findByModel(model, minPrice, maxPrice);
    }

    @Override
    public List<Car> searchByPrice(double minPrice, double maxPrice) {
        return carRepository.findByPrice(minPrice, maxPrice);
    }

    @Override
    public List<Car> searByKeyWord(String keyword) {
        return carRepository.findByKeyword(keyword);
    }

}
