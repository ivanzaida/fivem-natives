import { PlayerIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PED
 *
 * 0x56E414973C2A8C0E

 * 
 * Gets the ped for a specified player index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {PedIndex}  
 */
export function getPlayerPed(player: PlayerIndex): PedIndex {
	const getPlayerPed_result = Citizen.invokeNative<PedIndex>('0x56E414973C2A8C0E', player);
	return getPlayerPed_result;
}