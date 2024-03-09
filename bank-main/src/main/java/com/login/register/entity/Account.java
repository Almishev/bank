package com.login.register.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="accounts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="account_holder_name")
    private String holderName;


    @Column(name="account_holder_email")
    private String holderEmail;

    @Column(name="phone")
    private String mobile;
    @Column(name="gender")
    private String gender;
    @Column(name="age")
    private int age;
    @Column(name="nationality")
    private String nationality;

    @Column(name = "balance")
    private Double balance;
}
