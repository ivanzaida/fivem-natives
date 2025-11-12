import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_SCRIPT_CONTROL_ON
 *
 * 0x206A708429803A39

 * 
 * Even if this command returns TRUE, player control could still have been turned off by something else like camera or cutscene code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerScriptControlOn(player: PlayerIndex): boolean {
	const isPlayerScriptControlOn_result = Citizen.invokeNative<boolean>('0x206A708429803A39', player);
	return isPlayerScriptControlOn_result;
}