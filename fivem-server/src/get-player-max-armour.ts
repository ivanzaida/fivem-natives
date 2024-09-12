import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_MAX_ARMOUR
 *
 * 0x2A50657

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerMaxArmour(player: PlayerIndex): number {
	const getPlayerMaxArmour_result = Citizen.invokeNative<number>('0x2A50657', player);
	return getPlayerMaxArmour_result;
}