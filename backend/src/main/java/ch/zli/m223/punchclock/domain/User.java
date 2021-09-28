package ch.zli.m223.punchclock.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private String password;

}