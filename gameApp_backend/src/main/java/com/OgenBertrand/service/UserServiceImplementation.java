package com.OgenBertrand.service;

import com.OgenBertrand.repository.UserRepository;
import com.OgenBertrand.usermodel.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(email);
        System.out.println(user);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }

        System.out.println("Loaded user: " + user.getEmail() );
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                grantedAuthorities
        );
    }
}
