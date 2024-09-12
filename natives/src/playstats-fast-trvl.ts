/**
 * STATS:PLAYSTATS_FAST_TRVL
 *
 * 0x0EA2F05FA7C5B9D4

 * 
 * ------------------------------------------------------------------
 * @param {number} startLoc
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endLoc
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {number} type
 */
export function playstatsFastTrvl(startLoc: number, startX: number, startY: number, startZ: number, endLoc: number, endX: number, endY: number, endZ: number, type: number): void {
	const playstatsFastTrvl_result = Citizen.invokeNative<void>('0x0EA2F05FA7C5B9D4', startLoc, startX, startY, startZ, endLoc, endX, endY, endZ, type);
	return playstatsFastTrvl_result;
}