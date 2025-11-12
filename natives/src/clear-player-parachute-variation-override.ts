import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_PARACHUTE_VARIATION_OVERRIDE
 *
 * 0xBFB1BDBC26BB9501

 * 
 * An override for parachute variation. clears the call to SET_PED_PARACHUTE_VARIATION_OVERRIDE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerParachuteVariationOverride(player: PlayerIndex): void {
	const clearPlayerParachuteVariationOverride_result = Citizen.invokeNative<void>('0xBFB1BDBC26BB9501', player);
	return clearPlayerParachuteVariationOverride_result;
}