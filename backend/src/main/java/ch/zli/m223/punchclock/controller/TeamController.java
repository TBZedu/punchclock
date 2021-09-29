package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Team;
import ch.zli.m223.punchclock.service.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/teams")
public class TeamController {
    private TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    /**
     * The description of the services is described in the specific method name :)
     */

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Team> getAllTeams() {
        return teamService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Team createTeam(@Valid @RequestBody Team team) {
        return teamService.createTeam(team);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTeam(@PathVariable long id) {
        teamService.deleteTeam(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Team updateTeam(@Valid @RequestBody Team team) {
        return teamService.updateTeam(team);
    }
}