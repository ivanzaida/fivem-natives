/**
 * HUD:HUD_SUPPRESS_WEAPON_WHEEL_RESULTS_THIS_FRAME
 *
 * 0xF25C7C5177203507

 * 
 * Calling this each frame, stops the player from receiving a weapon via the weapon wheel.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function hudSuppressWeaponWheelResultsThisFrame(): void {
	const hudSuppressWeaponWheelResultsThisFrame_result = Citizen.invokeNative<void>('0xF25C7C5177203507', );
	return hudSuppressWeaponWheelResultsThisFrame_result;
}