/**
 * CFX:GET_ROPE_FLAGS
 *
 * 0xA80FFE99

 * ```cenum eRopeFlags{DrawShadowEnabled = 2,Breakable = 4,RopeUnwindingFront = 8,RopeWinding = 32}```
 * 
 * ------------------------------------------------------------------
 * @param {number} rope The rope to get the flags for.
 * @returns {number}  The rope's flags.
 */
export function getRopeFlags(rope: number): number {
	const getRopeFlags_result = Citizen.invokeNative<number>('0xA80FFE99', rope);
	return getRopeFlags_result;
}