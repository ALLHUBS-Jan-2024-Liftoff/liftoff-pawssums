package org.launchcode.wild_encounters.data;

import org.launchcode.wild_encounters.models.Encounter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncounterRepository extends CrudRepository<Encounter,Long> {



//    Object findAllById(Long id);
}
