package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {}