package ch.zli.m223.punchclock.validator;

import ch.zli.m223.punchclock.domain.User;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class UserValidator implements Validator {

    public boolean supports(Class uClass) {
        return User.class.equals(uClass);
    }

    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmptyOrWhitespace(e, "name", "name.empty");
        ValidationUtils.rejectIfEmpty(e, "password", "password.empty");

        User user = (User) obj;

        if(user.isAdmin()) {
            e.rejectValue("admin", "admin.set");
        }
    }
}