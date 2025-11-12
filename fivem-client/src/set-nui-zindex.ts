/**
 * CFX:SET_NUI_ZINDEX
 *
 * 0x3734AAFF

 * Set the z-index of the NUI resource.
 * 
 * ------------------------------------------------------------------
 * @param {number} zIndex New zindex value.
 */
export function setNuiZindex(zIndex: number): void {
	const setNuiZindex_result = Citizen.invokeNative<void>('0x3734AAFF', zIndex);
	return setNuiZindex_result;
}