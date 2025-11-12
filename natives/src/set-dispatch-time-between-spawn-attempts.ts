import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:SET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS
 *
 * 0x986164755D8E9A93

 * 
 * Sets the time between spawn attempts for the dispatch service.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {number} timeBetwenSpawnAttempts
 */
export function setDispatchTimeBetweenSpawnAttempts(dispatchType: EDispatchType | number, timeBetwenSpawnAttempts: number): void {
	const setDispatchTimeBetweenSpawnAttempts_result = Citizen.invokeNative<void>('0x986164755D8E9A93', dispatchType, timeBetwenSpawnAttempts);
	return setDispatchTimeBetweenSpawnAttempts_result;
}