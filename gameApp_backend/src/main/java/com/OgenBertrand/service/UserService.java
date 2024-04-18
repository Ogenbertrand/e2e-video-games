package com.OgenBertrand.service;

import com.OgenBertrand.usermodel.Users;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    List<Users> getAllUsers();

    Users findUserProfileByJwt(String jwt);

    Users findUserByEmail(String email);

    Users findUserById(String userId);

    List<Users> findAllUsers();

}