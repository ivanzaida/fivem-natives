/**
 * CFX:SET_LIGHT_FLAGS
 *
 * 0x28B22733

 * Set or update specific flags for a created light to control its behavior or properties.
 * 
 * ------------------------------------------------------------------
 * @param {number} flags Bitmask of flags to apply to the light
 */
export function setLightFlags(flags: number): void {
	const setLightFlags_result = Citizen.invokeNative<void>('0x28B22733', flags);
	return setLightFlags_result;
}