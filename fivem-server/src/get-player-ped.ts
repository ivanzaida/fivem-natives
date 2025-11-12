import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_PED
 *
 * 0x6E31E993

 * 
 * Gets the ped for a specified player index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player source, passed as a string.
 * @returns {PedIndex}  
 */
export function getPlayerPed(playerSrc: string): PedIndex {
	const getPlayerPed_result = Citizen.invokeNative<PedIndex>('0x6E31E993', playerSrc);
	return getPlayerPed_result;
}