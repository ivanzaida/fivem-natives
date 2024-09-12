/**
 * GRAPHICS:GOLF_TRAIL_SET_COLOUR
 *
 * 0xF3DB862660144254

 * 
 * ------------------------------------------------------------------
 * @param {number} rStart
 * @param {number} gStart
 * @param {number} bStart
 * @param {number} aStart
 * @param {number} rMiddle
 * @param {number} gMiddle
 * @param {number} bMiddle
 * @param {number} aMiddle
 * @param {number} rEnd
 * @param {number} gEnd
 * @param {number} bEnd
 * @param {number} aEnd
 */
export function golfTrailSetColour(rStart: number, gStart: number, bStart: number, aStart: number, rMiddle: number, gMiddle: number, bMiddle: number, aMiddle: number, rEnd: number, gEnd: number, bEnd: number, aEnd: number): void {
	const golfTrailSetColour_result = Citizen.invokeNative<void>('0xF3DB862660144254', rStart, gStart, bStart, aStart, rMiddle, gMiddle, bMiddle, aMiddle, rEnd, gEnd, bEnd, aEnd);
	return golfTrailSetColour_result;
}