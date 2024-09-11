/**
 * CFX:IS_BIGMAP_ACTIVE
 *
 * 0XFFF65C63

 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.Use [`IsBigmapFull`](#_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  A bool indicating if the minimap is currently expanded or normal state.
 */
export function isBigmapActive(): boolean {
	const isBigmapActive_result = Citizen.invokeNative<boolean>('0XFFF65C63', );
	return isBigmapActive_result;
}