/**
 * CFX:IS_BIGMAP_FULL
 *
 * 0x66EE14B2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  Returns true if the full map is currently revealed on the minimap. 
Use [`IsBigmapActive`](#_0xFFF65C63) to check if the minimap is currently expanded or in it's normal state.
 */
export function isBigmapFull(): boolean {
	const isBigmapFull_result = Citizen.invokeNative<boolean>('0x66EE14B2', );
	return isBigmapFull_result;
}