package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import ch.zli.m223.punchclock.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category createCategory(Category category) {
        return categoryRepository.saveAndFlush(category);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public void deleteCategory(long id) { categoryRepository.deleteById(id); }

    public Category updateCategory(Category category) {
        return categoryRepository.save(category);
    }
}
