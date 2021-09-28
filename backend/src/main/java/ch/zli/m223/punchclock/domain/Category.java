package ch.zli.m223.punchclock.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @OneToMany(mappedBy = "category")
    private Collection<Entry> entries = new ArrayList<>();

}