/**
 * MISC:USE_ACTIVE_CAMERA_FOR_TIMESLICING_CENTRE
 *
 * 0xC4A706CAFECA1953

 * 
 * Returns the city density settings (0.0f->1.0f)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function useActiveCameraForTimeslicingCentre(): void {
	const useActiveCameraForTimeslicingCentre_result = Citizen.invokeNative<void>('0xC4A706CAFECA1953', );
	return useActiveCameraForTimeslicingCentre_result;
}