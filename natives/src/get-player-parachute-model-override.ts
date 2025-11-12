import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PARACHUTE_MODEL_OVERRIDE
 *
 * 0x4B04D06A9A9A2186

 * 
 * Gets overriden parachute modelname hash. Returns 0 if invalid.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerParachuteModelOverride(player: PlayerIndex): number {
	const getPlayerParachuteModelOverride_result = Citizen.invokeNative<number>('0x4B04D06A9A9A2186', player);
	return getPlayerParachuteModelOverride_result;
}