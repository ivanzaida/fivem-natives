import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CAN_PLAYER_START_MISSION
 *
 * 0xF7C1BF3F9EB7C65E

 * 
 * Checks that the player is in control (not falling), is not being arrested etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function canPlayerStartMission(player: PlayerIndex): boolean {
	const canPlayerStartMission_result = Citizen.invokeNative<boolean>('0xF7C1BF3F9EB7C65E', player);
	return canPlayerStartMission_result;
}