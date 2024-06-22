package com.gameApp.gameApp_backend.repository;

import com.gameApp.gameApp_backend.domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

}
