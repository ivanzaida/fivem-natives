/**
 * GRAPHICS:GOLF_TRAIL_SET_FIXED_CONTROL_POINT_ENABLE
 *
 * 0x6171C9E04571F992

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function golfTrailSetFixedControlPointEnable(enabled: boolean): void {
	const golfTrailSetFixedControlPointEnable_result = Citizen.invokeNative<void>('0x6171C9E04571F992', enabled);
	return golfTrailSetFixedControlPointEnable_result;
}