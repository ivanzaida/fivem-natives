import { ERlAgegroup } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_AGE_GROUP
 *
 * 0xB3592BAAAC94842D

 * 
 * On xbox builds gets age group defined in ENUM RL_AGEGROUP.
 * PS3 builds will return:
 * RL_AGEGROUP_CHILD if age restrictions are set and the age is < MIN_AGE_RATING
 * RL_AGEGROUP_ADULT if the age is >= MIN_AGE_RATING
 * RL_AGEGROUP_INVALID for all other situations.
 * RL_AGEGROUP_TEEN is not returned on PS3
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ERlAgegroup}  
 */
export function networkGetAgeGroup(): ERlAgegroup {
	const networkGetAgeGroup_result = Citizen.invokeNative<ERlAgegroup>('0xB3592BAAAC94842D', );
	return networkGetAgeGroup_result;
}