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

    /**
     * Currently the password is stored in plain text.
     * "It's not a security issue, it's a feature." - Me 2021
     */
    @Column
    private String password;

    @Column
    private boolean isAdmin;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @OneToMany(mappedBy = "user")
    private Collection<Entry> entries = new ArrayList<>();

}