package com.login.register.service;



import com.login.register.dto.AccountDto;
import com.login.register.exception.AccountException;

import java.util.List;


public interface AccountService {

    AccountDto createAccount(AccountDto account) throws AccountException;

    AccountDto getAccountById (Long accountId) throws AccountException;

    AccountDto deposit(Long id, double amount) throws AccountException;

    AccountDto draft(Long id, double amount) throws AccountException;

    List<AccountDto> getAllAccounts();

    AccountDto updateAccount(AccountDto accountDto, Long id) throws AccountException;

    List <String> getAllEmails();

    void deleteAccount(Long id) throws AccountException;


}
