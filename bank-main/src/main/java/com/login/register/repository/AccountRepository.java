package com.login.register.repository;


import com.login.register.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {

    Account findByHolderEmail(String email);

}
