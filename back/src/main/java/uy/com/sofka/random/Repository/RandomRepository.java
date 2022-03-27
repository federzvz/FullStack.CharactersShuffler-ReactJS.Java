package uy.com.sofka.random.Repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import uy.com.sofka.random.Entity.Random;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {

}
