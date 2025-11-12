import { EGravityLevel } from '@ivanzaida/structures'

/**
 * MISC:SET_GRAVITY_LEVEL
 *
 * 0x446CF90BF0024020

 * 
 * Should be done at the start of a level or after a cutscene. Not advisable to change during normal play.
 * 
 * level can be from 0 to 3
 * 0: 9.8 - normal
 * 1: 2.4 - low
 * 2: 0.1 - very low
 * 3: 0.0 - off
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EGravityLevel} gravityLevel
 */
export function setGravityLevel(gravityLevel: EGravityLevel | number): void {
	const setGravityLevel_result = Citizen.invokeNative<void>('0x446CF90BF0024020', gravityLevel);
	return setGravityLevel_result;
}