import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_STRING
 *
 * 0xCEA81DACD6DA3ADB

 * 
 * p1 is always -1 in the script files
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} player
 * @returns {string}  
 */
export function statGetString(keyHash: EStatsenum | number, player: number = 1): string {
	const statGetString_result = Citizen.invokeNative<string>('0xCEA81DACD6DA3ADB', keyHash, player);
	return statGetString_result;
}