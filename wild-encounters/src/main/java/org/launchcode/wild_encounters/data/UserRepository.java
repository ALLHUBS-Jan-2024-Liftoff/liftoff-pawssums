package org.launchcode.wild_encounters.data;

import org.launchcode.wild_encounters.models.UserInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserInfo, Integer> {
}
