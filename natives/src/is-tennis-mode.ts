import { PedIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_TENNIS_MODE
 *
 * 0xB5B917AAA3DF1A78

 * 
 * Is the ped in tennis mode?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isTennisMode(ped: PedIndex): boolean {
	const isTennisMode_result = Citizen.invokeNative<boolean>('0xB5B917AAA3DF1A78', ped);
	return isTennisMode_result;
}