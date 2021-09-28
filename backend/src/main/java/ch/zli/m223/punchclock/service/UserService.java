package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Team;
import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.repository.TeamRepository;
import ch.zli.m223.punchclock.repository.UserRepository;

import java.util.List;

public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    public List<User> findUser() {
        return userRepository.findAll();
    }

    public void deleteUser(long id) { userRepository.deleteById(id); }

    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
