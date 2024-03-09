package com.login.register.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountDto {

    private Long id;
    @NotNull(message = "Holder name shouldn't be null")
    private String holderName;
    @Email(message = "invalid email address")
    private String holderEmail;
    @Pattern(regexp = "^\\d{10}$",message = "invalid mobile number entered ")
    private String mobile;

    private String gender;
    @Min(18)
    @Max(60)
    private int age;

    @NotBlank
    private String nationality;
    @Min(50)
    private double balance;



}
