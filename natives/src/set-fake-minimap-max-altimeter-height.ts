import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:SET_FAKE_MINIMAP_MAX_ALTIMETER_HEIGHT
 *
 * 0x4A12B9AB7A7BA5C0

 * 
 * Argument must be 0.0f or above 38.0f, or it will be ignored.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} maxHeight
 * @param {boolean} colourAltimeterArea Set this to TRUE to fill the altimeter background with a semiopaque colour
 * @param {EHudColours} hudColor
 */
export function setFakeMinimapMaxAltimeterHeight(maxHeight: number, colourAltimeterArea: boolean = false, hudColor: EHudColours | number = 21): void {
	const setFakeMinimapMaxAltimeterHeight_result = Citizen.invokeNative<void>('0x4A12B9AB7A7BA5C0', maxHeight, colourAltimeterArea, hudColor);
	return setFakeMinimapMaxAltimeterHeight_result;
}