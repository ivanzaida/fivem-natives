import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_PARACHUTE_MODEL_OVERRIDE
 *
 * 0xC7DB642109D72AF8

 * 
 * An override for parachute model. clears the call to SET_PLAYER_PARACHUTE_MODEL_OVERRIDE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerParachuteModelOverride(player: PlayerIndex): void {
	const clearPlayerParachuteModelOverride_result = Citizen.invokeNative<void>('0xC7DB642109D72AF8', player);
	return clearPlayerParachuteModelOverride_result;
}