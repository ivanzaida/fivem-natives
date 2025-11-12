/**
 * WATER:REMOVE_EXTRA_CALMING_QUAD
 *
 * 0x6880878FB8B44799

 * 
 * p0 is the handle returned from ADD_EXTRA_CALMING_QUAD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} idx
 */
export function removeExtraCalmingQuad(idx: number): void {
	const removeExtraCalmingQuad_result = Citizen.invokeNative<void>('0x6880878FB8B44799', idx);
	return removeExtraCalmingQuad_result;
}