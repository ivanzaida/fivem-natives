import { PlayerIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PARACHUTE_VARIATION_OVERRIDE
 *
 * 0x740F6E63EE1C1D43

 * 
 * An override for parachute variation. Used to sync up script and code.
 * 
 * p1 was always 5.
 * p4 was always false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EPedComponent} componentNumber
 * @param {number} newDrawableNumber
 * @param {number} texID
 * @param {number} altDrawableID
 */
export function setPlayerParachuteVariationOverride(player: PlayerIndex, componentNumber: EPedComponent | number, newDrawableNumber: number, texID: number = 0, altDrawableID: number = 0): void {
	const setPlayerParachuteVariationOverride_result = Citizen.invokeNative<void>('0x740F6E63EE1C1D43', player, componentNumber, newDrawableNumber, texID, altDrawableID);
	return setPlayerParachuteVariationOverride_result;
}