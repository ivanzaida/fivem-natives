/**
 * HUD:CLEAR_VALID_VEHICLE_HIT_HASHES
 *
 * 0xEF8AE79C28640CD2

 * 
 * ------------------------------------------------------------------
 */
export function clearValidVehicleHitHashes(): void {
	const clearValidVehicleHitHashes_result = Citizen.invokeNative<void>('0xEF8AE79C28640CD2', );
	return clearValidVehicleHitHashes_result;
}