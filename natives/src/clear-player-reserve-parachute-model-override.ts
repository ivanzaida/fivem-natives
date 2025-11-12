import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE
 *
 * 0x6C8F0A6A6EFD073C

 * 
 * An override for the reserve parachute model. clears the call to SET_PLAYER_RESERVE_PARACHUTE_MODEL_OVERRIDE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerReserveParachuteModelOverride(player: PlayerIndex): void {
	const clearPlayerReserveParachuteModelOverride_result = Citizen.invokeNative<void>('0x6C8F0A6A6EFD073C', player);
	return clearPlayerReserveParachuteModelOverride_result;
}