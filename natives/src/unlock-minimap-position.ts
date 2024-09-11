/**
 * HUD:UNLOCK_MINIMAP_POSITION
 *
 * 0x33311EBA9464741D

 * 
 * ------------------------------------------------------------------
 */
export function unlockMinimapPosition(): void {
	const unlockMinimapPosition_result = Citizen.invokeNative<void>('0x33311EBA9464741D', );
	return unlockMinimapPosition_result;
}