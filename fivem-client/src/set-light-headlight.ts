/**
 * CFX:SET_LIGHT_HEADLIGHT
 *
 * 0xFF44D502

 * Set the headlight properties of a created light, adjusting its intensity and range.
 * 
 * ------------------------------------------------------------------
 * @param {number} intensity The intensity level of the headlight
 * @param {number} range The effective range of the headlight
 */
export function setLightHeadlight(intensity: number, range: number): void {
	const setLightHeadlight_result = Citizen.invokeNative<void>('0xFF44D502', intensity, range);
	return setLightHeadlight_result;
}