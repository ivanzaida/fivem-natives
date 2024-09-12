/**
 * CFX:GET_CALMING_QUAD_COUNT
 *
 * 0xCEBFC42

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the amount of calming quads loaded.
 */
export function getCalmingQuadCount(): number {
	const getCalmingQuadCount_result = Citizen.invokeNative<number>('0xCEBFC42', );
	return getCalmingQuadCount_result;
}