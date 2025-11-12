/**
 * HUD:CLEAR_GPS_RACE_TRACK
 *
 * 0x3792000AF2959DA0

 * 
 * Does the same as SET_RACE_TRACK_RENDER(false);
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearGpsRaceTrack(): void {
	const clearGpsRaceTrack_result = Citizen.invokeNative<void>('0x3792000AF2959DA0', );
	return clearGpsRaceTrack_result;
}