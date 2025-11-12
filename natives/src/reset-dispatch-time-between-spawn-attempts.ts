import { EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:RESET_DISPATCH_TIME_BETWEEN_SPAWN_ATTEMPTS
 *
 * 0x5FBC5D27DD8DFF61

 * 
 * Resets the time between spawn attempts for the dispatch service.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDispatchType} dispatchType
 */
export function resetDispatchTimeBetweenSpawnAttempts(dispatchType: EDispatchType | number): void {
	const resetDispatchTimeBetweenSpawnAttempts_result = Citizen.invokeNative<void>('0x5FBC5D27DD8DFF61', dispatchType);
	return resetDispatchTimeBetweenSpawnAttempts_result;
}