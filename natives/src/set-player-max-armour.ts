import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MAX_ARMOUR
 *
 * 0x776D5F57819A1E41

 * 
 * Default is 100. Use player id and not ped id. For instance: PLAYER::SET_PLAYER_MAX_ARMOUR(PLAYER::PLAYER_ID(), 100); // main_persistent.ct4
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} maxArmour
 */
export function setPlayerMaxArmour(player: PlayerIndex, maxArmour: number): void {
	const setPlayerMaxArmour_result = Citizen.invokeNative<void>('0x776D5F57819A1E41', player, maxArmour);
	return setPlayerMaxArmour_result;
}