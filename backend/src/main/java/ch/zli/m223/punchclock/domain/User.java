package ch.zli.m223.punchclock.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

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

    @Column
    private boolean isAdmin;

    @ManyToOne
    @JoinColumn(name = "id")
    private Team team;

    @OneToMany(mappedBy = "user")
    private Collection<Entry> entries = new ArrayList<>();

}