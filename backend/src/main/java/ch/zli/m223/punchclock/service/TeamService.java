package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Team;
import ch.zli.m223.punchclock.repository.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {
    private TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Team createTeam(Team team) {
        return teamRepository.saveAndFlush(team);
    }

    public List<Team> findAll() {
        return teamRepository.findAll();
    }

    public void deleteTeam(long id) { teamRepository.deleteById(id); }

    public Team updateTeam(Team team) {
        return teamRepository.save(team);
    }
}
