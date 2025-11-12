import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_PARACHUTE_PACK_MODEL_OVERRIDE
 *
 * 0xBDAA517C3D10DB80

 * 
 * An override for parachute pack model. clears the call to SET_PLAYER_PARACHUTE_MODEL_OVERRIDE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerParachutePackModelOverride(player: PlayerIndex): void {
	const clearPlayerParachutePackModelOverride_result = Citizen.invokeNative<void>('0xBDAA517C3D10DB80', player);
	return clearPlayerParachutePackModelOverride_result;
}