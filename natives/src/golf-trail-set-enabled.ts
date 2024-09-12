/**
 * GRAPHICS:GOLF_TRAIL_SET_ENABLED
 *
 * 0x1100D0FDA8244965

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function golfTrailSetEnabled(enabled: boolean): void {
	const golfTrailSetEnabled_result = Citizen.invokeNative<void>('0x1100D0FDA8244965', enabled);
	return golfTrailSetEnabled_result;
}