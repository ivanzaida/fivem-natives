/**
 * MISC:WATER_OVERRIDE_SET_STRENGTH
 *
 * 0x92425F5F9A2DC557

 * 
 * This seems to edit the water wave, intensity around your current location.
 * 
 * 0.0f = Normal
 * 1.0f = So Calm and Smooth, a boat will stay still.
 * 3.0f = Really Intense.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} strength
 */
export function waterOverrideSetStrength(strength: number): void {
	const waterOverrideSetStrength_result = Citizen.invokeNative<void>('0x92425F5F9A2DC557', strength);
	return waterOverrideSetStrength_result;
}