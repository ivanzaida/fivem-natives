/**
 * HUD:LOCK_MINIMAP_ANGLE
 *
 * 0xCD1B743BDEC39145

 * 
 * Locks the minimap to the specified angle in integer degrees.
 * 
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} angle
 */
export function lockMinimapAngle(angle: number): void {
	const lockMinimapAngle_result = Citizen.invokeNative<void>('0xCD1B743BDEC39145', angle);
	return lockMinimapAngle_result;
}