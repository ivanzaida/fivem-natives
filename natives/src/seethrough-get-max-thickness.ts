/**
 * GRAPHICS:SEETHROUGH_GET_MAX_THICKNESS
 *
 * 0xA315036610507841

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function seethroughGetMaxThickness(): number {
	const seethroughGetMaxThickness_result = Citizen.invokeNative<number>('0xA315036610507841', );
	return seethroughGetMaxThickness_result;
}