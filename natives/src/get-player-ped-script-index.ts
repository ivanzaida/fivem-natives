import { PlayerIndex, PlayerScriptId } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PED_SCRIPT_INDEX
 *
 * 0xE8466DBC1A7E794F

 * 
 * Does the same like PLAYER::GET_PLAYER_PED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {PlayerScriptId}  
 */
export function getPlayerPedScriptIndex(player: PlayerIndex): PlayerScriptId {
	const getPlayerPedScriptIndex_result = Citizen.invokeNative<PlayerScriptId>('0xE8466DBC1A7E794F', player);
	return getPlayerPedScriptIndex_result;
}