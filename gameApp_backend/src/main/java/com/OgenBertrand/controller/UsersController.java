package com.OgenBertrand.controller;

import com.OgenBertrand.response.AuthResponse;
import com.OgenBertrand.service.UserService;
import com.OgenBertrand.service.UserServiceImplementation;
import com.OgenBertrand.SecurityConfig.JwtProvider;
import com.OgenBertrand.usermodel.Users;
import com.OgenBertrand.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class UsersController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserServiceImplementation customUserDetails;

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> createUserHandler(@RequestBody Users user)  {
        String email = user.getEmail();
        String password = user.getPassword();
        String username = user.getUsername();


        Users isEmailExist = userRepository.findByEmail(email);
        if (isEmailExist != null) {
            //throw new Exception("Email Is Already Used With Another Account");
            System.out.println("Email already exist");
            return new ResponseEntity<>("Email already exist", HttpStatus.CONFLICT);
        }
        else {
            Users createdUser = new Users();
            createdUser.setEmail(email);
            createdUser.setUsername(username);
            createdUser.setPassword(passwordEncoder.encode(password));

            return new ResponseEntity<>("Sign up success", HttpStatus.OK);
        }



        /*Users savedUser = userRepository.save(createdUser);
        //userRepository.save(savedUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = JwtProvider.generateToken(authentication);


        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Register Success");
        authResponse.setStatus(true);
        */

    }





    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody Users loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        System.out.println(email+"-------"+password);

        Authentication authentication = authenticate(email,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();

        authResponse.setMessage("Login success");
        authResponse.setJwt(token);
        authResponse.setStatus(true);

        return new ResponseEntity<>(authResponse,HttpStatus.OK);
    }




    private Authentication authenticate(String email, String password) {

        System.out.println(email+"---++----"+password);

        UserDetails userDetails = customUserDetails.loadUserByUsername(email);

        System.out.println("Sig in in user details"+ userDetails);

        if(userDetails == null) {
            System.out.println("Sign in details - null" + userDetails);

            throw new BadCredentialsException("Invalid email or password");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())) {
            System.out.println("Sign in userDetails - password mismatch"+userDetails);

            throw new BadCredentialsException("Invalid password");

        }
        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());

    }


}