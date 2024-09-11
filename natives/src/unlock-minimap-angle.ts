/**
 * HUD:UNLOCK_MINIMAP_ANGLE
 *
 * 0xF3E3EA936C653F22

 * 
 * ------------------------------------------------------------------
 */
export function unlockMinimapAngle(): void {
	const unlockMinimapAngle_result = Citizen.invokeNative<void>('0xF3E3EA936C653F22', );
	return unlockMinimapAngle_result;
}