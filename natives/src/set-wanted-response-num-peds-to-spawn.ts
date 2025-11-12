import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:SET_WANTED_RESPONSE_NUM_PEDS_TO_SPAWN
 *
 * 0x5844B0328AB76BBF

 * 
 * Sets the number of peds to spawn for the wanted response.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {number} numPedsToSpawn
 */
export function setWantedResponseNumPedsToSpawn(dispatchType: EDispatchType | number, numPedsToSpawn: number): void {
	const setWantedResponseNumPedsToSpawn_result = Citizen.invokeNative<void>('0x5844B0328AB76BBF', dispatchType, numPedsToSpawn);
	return setWantedResponseNumPedsToSpawn_result;
}