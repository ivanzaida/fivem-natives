/**
 * HUD:HIDE_STREET_AND_CAR_NAMES_THIS_FRAME
 *
 * 0x0E9AAB792753A7A5

 * 
 * Hides area and vehicle name HUD components for one frame.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hideStreetAndCarNamesThisFrame(): void {
	const hideStreetAndCarNamesThisFrame_result = Citizen.invokeNative<void>('0x0E9AAB792753A7A5', );
	return hideStreetAndCarNamesThisFrame_result;
}