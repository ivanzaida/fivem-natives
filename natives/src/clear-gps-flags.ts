/**
 * HUD:CLEAR_GPS_FLAGS
 *
 * 0xB8A4D35AE2F0B024

 * 
 * Clears the GPS flags. Only the script that originally called SET_GPS_FLAGS can clear them.
 * 
 * Doesn't seem like the flags are actually read by the game at all.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearGpsFlags(): void {
	const clearGpsFlags_result = Citizen.invokeNative<void>('0xB8A4D35AE2F0B024', );
	return clearGpsFlags_result;
}