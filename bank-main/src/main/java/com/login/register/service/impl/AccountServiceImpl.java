package com.login.register.service.impl;

import com.login.register.dto.AccountDto;
import com.login.register.entity.Account;
import com.login.register.exception.AccountException;
import com.login.register.repository.AccountRepository;
import com.login.register.service.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public AccountServiceImpl(AccountRepository accountRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public AccountDto createAccount(AccountDto accountDto) throws AccountException {

        Account storedAccount = accountRepository.findByHolderEmail(accountDto.getHolderEmail());
       if(storedAccount !=  null){
            throw new AccountException("This email already exist");
       }

        Account account = modelMapper.map(accountDto, Account.class);

        Account savedAccount = accountRepository.save(account);

        AccountDto savedAccountDto = modelMapper.map(savedAccount, AccountDto.class);

        return savedAccountDto;
    }

    @Override
    public AccountDto getAccountById(Long accountId) throws AccountException {

        Account account = accountRepository.findById(accountId).orElseThrow(() -> new AccountException("Account does not exist"));

        return modelMapper.map(account, AccountDto.class);
    }

    @Override
    public AccountDto deposit(Long id, double amount) throws AccountException {

        Account account = accountRepository.findById(id).orElseThrow(() -> new AccountException("Account does not exist"));
        account.setBalance(account.getBalance() + amount);
        Account savedAccount = accountRepository.save(account);
        return modelMapper.map(savedAccount, AccountDto.class);
    }

    @Override
    public AccountDto draft(Long id, double amount) throws AccountException {

        Account account = accountRepository.findById(id).orElseThrow(() -> new AccountException("Account does not exist"));
        double newBalance = account.getBalance() - amount;
        if (newBalance < 0) {
            throw new AccountException("Not enough money");
        }
        account.setBalance(newBalance);
        Account savedAccount = accountRepository.save(account);
        return modelMapper.map(savedAccount, AccountDto.class);
    }

    @Override
    public List<AccountDto> getAllAccounts() {

        List<Account> accounts = accountRepository.findAll();

        return accounts.stream().map((todo) -> modelMapper.map(todo, AccountDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getAllEmails() {
        List<AccountDto> accounts = getAllAccounts();
        List<String> emails = new ArrayList<>();
        for (AccountDto account : accounts) {
            emails.add(account.getHolderEmail());
        }
        return emails;
    }

    @Override
    public void deleteAccount(Long id) throws AccountException {

        Account account = accountRepository.findById(id).orElseThrow(() -> new AccountException("Account does not exist"));

        accountRepository.delete(account);
    }


    @Override
    public AccountDto updateAccount(AccountDto accountDto, Long id) throws AccountException {

        Account account= accountRepository.findById(id)
                .orElseThrow(() -> new AccountException("Todo not found with id : " + id));
        account.setHolderName(accountDto.getHolderName());
        account.setHolderEmail(accountDto.getHolderEmail());
        account.setMobile(accountDto.getMobile());
        account.setAge(accountDto.getAge());
        account.setGender(accountDto.getGender());
        account.setNationality(accountDto.getNationality());
        account.setBalance(accountDto.getBalance());


        Account updatedAccount = accountRepository.save(account);

        return modelMapper.map(updatedAccount, AccountDto.class);
    }



}
