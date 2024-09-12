import { PlayerIndex, EPedComponent } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PREVIOUS_VARIATION_DATA
 *
 * 0xFA5313EFD99BB771

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EPedComponent} componentNumber
 * @param {number} drawableID
 * @param {number} altDrawableID
 * @param {number} textureID
 * @param {number} paletteID
 */
export function setPlayerPreviousVariationData(player: PlayerIndex, componentNumber: EPedComponent | number, drawableID: number, altDrawableID: number = 0, textureID: number = 0, paletteID: number = 0): void {
	const setPlayerPreviousVariationData_result = Citizen.invokeNative<void>('0xFA5313EFD99BB771', player, componentNumber, drawableID, altDrawableID, textureID, paletteID);
	return setPlayerPreviousVariationData_result;
}