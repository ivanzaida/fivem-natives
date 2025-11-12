import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:SET_MAX_NUM_PORTABLE_PICKUPS_CARRIED_BY_PLAYER
 *
 * 0x48DD7FCBAD86D46F

 * 
 * Sets the maximum number of portable pickups that the local player can carry.
 * If the local player is carrying some pickups when you call this, he will drop some if he has too many.
 * If modelName is 0, MaxPickups is the total number of portable pickups allowed to be carried of any type
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelName
 * @param {number} maxPickups
 */
export function setMaxNumPortablePickupsCarriedByPlayer(modelName: ModelNames, maxPickups: number): void {
	const setMaxNumPortablePickupsCarriedByPlayer_result = Citizen.invokeNative<void>('0x48DD7FCBAD86D46F', modelName, maxPickups);
	return setMaxNumPortablePickupsCarriedByPlayer_result;
}