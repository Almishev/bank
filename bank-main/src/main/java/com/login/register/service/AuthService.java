package com.login.register.service;


import com.login.register.dto.LoginDto;
import com.login.register.dto.RegisterDto;
import com.login.register.exception.AccountException;

public interface AuthService {
    String register(RegisterDto registerDto) throws AccountException;

    String login(LoginDto loginDto);
}
