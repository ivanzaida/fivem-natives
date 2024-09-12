import { PlayerIndex, PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_PED
 *
 * 0X6E31E993

 * Gets the ped for a specified player index.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {PedIndex}  
 */
export function getPlayerPed(player: PlayerIndex): PedIndex {
	const getPlayerPed_result = Citizen.invokeNative<PedIndex>('0X6E31E993', player);
	return getPlayerPed_result;
}