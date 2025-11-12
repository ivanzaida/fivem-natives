/**
 * CFX:SET_LIGHT_EXTRAFLAGS
 *
 * 0xB2D37E97

 * Set additional configuration flags for an existing light
 * 
 * ------------------------------------------------------------------
 * @param {number} extraFlags Bitmask of extra flags
 */
export function setLightExtraflags(extraFlags: number): void {
	const setLightExtraflags_result = Citizen.invokeNative<void>('0xB2D37E97', extraFlags);
	return setLightExtraflags_result;
}