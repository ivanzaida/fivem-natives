import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
 *
 * 0x000E48394E21867C

 * 
 * Gets overriden reserve parachute modelname hash. Returns 0 if invalid.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerReserveParachuteModelOverride(player: PlayerIndex): number {
	const getPlayerReserveParachuteModelOverride_result = Citizen.invokeNative<number>('0x000E48394E21867C', player);
	return getPlayerReserveParachuteModelOverride_result;
}