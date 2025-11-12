import { EPlayerListType } from '@ivanzaida/structures'

/**
 * NETWORK:REFRESH_PLAYER_LIST_STATS
 *
 * 0xAD5E28295E97B3FB

 * 
 * Checks for when the playerlist changes, and triggers for the new stats to be grabbed.
 * Returns true when the Player List is up to date.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EPlayerListType} type
 * @returns {boolean}  
 */
export function refreshPlayerListStats(type: EPlayerListType | number = 102): boolean {
	const refreshPlayerListStats_result = Citizen.invokeNative<boolean>('0xAD5E28295E97B3FB', type);
	return refreshPlayerListStats_result;
}