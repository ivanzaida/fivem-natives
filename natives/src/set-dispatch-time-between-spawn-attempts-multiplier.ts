import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:SET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS_MULTIPLIER
 *
 * 0x28CC6EA9A96AA5D4

 * 
 * Sets the time between spawn attempts multiplier for the dispatch service.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 * @param {number} timeBetwenSpawnAttemptsMultiplier
 */
export function setDispatchTimeBetweenSpawnAttemptsMultiplier(dispatchType: EDispatchType | number, timeBetwenSpawnAttemptsMultiplier: number): void {
	const setDispatchTimeBetweenSpawnAttemptsMultiplier_result = Citizen.invokeNative<void>('0x28CC6EA9A96AA5D4', dispatchType, timeBetwenSpawnAttemptsMultiplier);
	return setDispatchTimeBetweenSpawnAttemptsMultiplier_result;
}