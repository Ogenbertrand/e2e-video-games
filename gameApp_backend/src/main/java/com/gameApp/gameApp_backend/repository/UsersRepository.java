package com.gameApp.gameApp_backend.repository;

import com.gameApp.gameApp_backend.domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}