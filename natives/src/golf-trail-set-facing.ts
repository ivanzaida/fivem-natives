/**
 * GRAPHICS:GOLF_TRAIL_SET_FACING
 *
 * 0xD4C0EC928BB68223

 * 
 * ------------------------------------------------------------------
 * @param {boolean} facing
 */
export function golfTrailSetFacing(facing: boolean): void {
	const golfTrailSetFacing_result = Citizen.invokeNative<void>('0xD4C0EC928BB68223', facing);
	return golfTrailSetFacing_result;
}