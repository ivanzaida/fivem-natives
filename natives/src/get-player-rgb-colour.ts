import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_RGB_COLOUR
 *
 * 0x8137826EBA634D9F

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 */
export function getPlayerRgbColour(player: PlayerIndex, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */): void {
	const getPlayerRgbColour_result = Citizen.invokeNative<void>('0x8137826EBA634D9F', player, red.dataView, green.dataView, blue.dataView);
	return getPlayerRgbColour_result;
}