import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_USER_ID
 *
 * 0xD8DECC82BA81E8D9

 * 
 * Returns the rockstar ID (user id) value of a given stat. Returns "STAT_UNKNOWN" if the statHash is invalid or the stat has no userId
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @returns {string}  
 */
export function statGetUserId(keyHash: EStatsenum | number): string {
	const statGetUserId_result = Citizen.invokeNative<string>('0xD8DECC82BA81E8D9', keyHash);
	return statGetUserId_result;
}