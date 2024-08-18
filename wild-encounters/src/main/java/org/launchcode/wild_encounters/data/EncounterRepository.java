package org.launchcode.wild_encounters.data;

import org.launchcode.wild_encounters.models.Encounter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EncounterRepository extends CrudRepository<Encounter,Long> {
    List<Encounter> findByUserInfoId(Long userId);



//    Object findAllById(Long id);
}
