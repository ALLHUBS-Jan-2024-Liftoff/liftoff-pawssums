package org.launchcode.wild_encounters.data;

import org.launchcode.wild_encounters.models.EncounterInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncounterRepository extends CrudRepository<EncounterInfo,Long> {

}
