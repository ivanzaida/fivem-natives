/**
 * GRAPHICS:PRESET_INTERIOR_AMBIENT_CACHE
 *
 * 0x8CBAC8B951402F69

 * 
 * Only one match in the scripts:
 * 
 * GRAPHICS::PRESET_INTERIOR_AMBIENT_CACHE("int_carrier_hanger");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} modifierName
 */
export function presetInteriorAmbientCache(modifierName: string): void {
	const presetInteriorAmbientCache_result = Citizen.invokeNative<void>('0x8CBAC8B951402F69', modifierName);
	return presetInteriorAmbientCache_result;
}