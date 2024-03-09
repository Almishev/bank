package com.login.register.controller;


import com.login.register.dto.AccountDto;
import com.login.register.exception.AccountException;
import com.login.register.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/accounts")
public class AccountController {


    @Autowired
    private AccountService accountService;


   // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping
    public ResponseEntity<AccountDto> addAccount(@RequestBody @Valid AccountDto accountDto) throws AccountException {

        return new ResponseEntity<>(accountService.createAccount(accountDto), HttpStatus.CREATED);
    }
   // @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/{accountId}")
    public ResponseEntity<AccountDto> getAccountById(@PathVariable  Long accountId) throws AccountException {

        return new ResponseEntity<>(accountService.getAccountById(accountId),HttpStatus.OK);
    }

   // @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}/deposit")
    public  ResponseEntity<AccountDto> deposit(@PathVariable Long id,@RequestBody Map<String,Double> request) throws AccountException {

        Double amount = request.get("amount");
        AccountDto accountDto = accountService.deposit(id,amount);
        return  ResponseEntity.ok(accountDto);
    }

  //  @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PutMapping("/{id}/draft")
    public  ResponseEntity<AccountDto> draft(@PathVariable Long id, @RequestBody Map<String,Double> request) throws AccountException {

        Double amount = request.get("amount");
        AccountDto accountDto = accountService.draft(id,amount);
        return  ResponseEntity.ok(accountDto);
    }


  //  @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<AccountDto>> getAllAccounts(){
        List<AccountDto> accounts = accountService.getAllAccounts();

        return ResponseEntity.ok(accounts);
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAccount(@PathVariable("id") Long id) throws AccountException {
        accountService.deleteAccount(id);
        return ResponseEntity.ok("Account deleted successfully!.");
    }

    @PutMapping("{id}")
    public ResponseEntity<AccountDto> updateAccount(@RequestBody AccountDto accountDto, @PathVariable("id") Long accountId) throws AccountException {
        AccountDto updatedTodo = accountService.updateAccount(accountDto, accountId);
        return ResponseEntity.ok(updatedTodo);
    }

    @GetMapping("/emails")
    public ResponseEntity<List<String>> getAllEmails() {
        List<String> emails = accountService.getAllEmails();
        return ResponseEntity.ok(emails);
    }

}
