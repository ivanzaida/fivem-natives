import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_MAX_ARMOUR
 *
 * 0xD69C6BA96938C9C1

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerMaxArmour(player: PlayerIndex): number {
	const getPlayerMaxArmour_result = Citizen.invokeNative<number>('0xD69C6BA96938C9C1', player);
	return getPlayerMaxArmour_result;
}