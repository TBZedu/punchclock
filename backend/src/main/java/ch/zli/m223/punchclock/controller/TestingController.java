package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.domain.Team;
import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.service.CategoryService;
import ch.zli.m223.punchclock.service.EntryService;
import ch.zli.m223.punchclock.service.TeamService;
import ch.zli.m223.punchclock.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/testing")
public class TestingController {
    private CategoryService categoryService;
    private EntryService entryService;
    private TeamService teamService;
    private UserService userService;

    public TestingController(CategoryService categoryService, EntryService entryService, TeamService teamService, UserService userService) {
        this.categoryService = categoryService;
        this.entryService = entryService;
        this.teamService = teamService;
        this.userService = userService;
    }

    /**
     * The description of the services is described in the specific method name :)
     */

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createTestData() {
        Team team = new Team();
        team.setName("Test Team");
        teamService.createTeam(team);

        User userZli = new User();
        userZli.setUsername("zli");
        userZli.setPassword("Zli123");
        userService.createUser(userZli);

        User userLoris = new User();
        userLoris.setUsername("lorispolenz");
        userLoris.setPassword("Thi%!s6ver8seri1sPas_w)r#");
        userService.createUser(userLoris);

        Entry entry = new Entry();
        entry.setCheckIn(LocalDateTime.parse("10-03-2002T00:00:00.000"));
        entry.setCheckOut(LocalDateTime.now());
        entryService.createEntry(entry);
    }
}
