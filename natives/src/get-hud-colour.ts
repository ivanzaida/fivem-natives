import { EHudColours, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_HUD_COLOUR
 *
 * 0xA306E6FD2A6558E6

 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} hudColour
 * @param {IntRef} red [Ref]
 * @param {IntRef} green [Ref]
 * @param {IntRef} blue [Ref]
 * @param {IntRef} alpha [Ref]
 */
export function getHudColour(hudColour: EHudColours | number, red: IntRef /* ptr */, green: IntRef /* ptr */, blue: IntRef /* ptr */, alpha: IntRef /* ptr */): void {
	const getHudColour_result = Citizen.invokeNative<void>('0xA306E6FD2A6558E6', hudColour, red.dataView, green.dataView, blue.dataView, alpha.dataView);
	return getHudColour_result;
}