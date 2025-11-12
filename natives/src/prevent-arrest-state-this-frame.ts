/**
 * MISC:PREVENT_ARREST_STATE_THIS_FRAME
 *
 * 0xD4930C902E5CD6B6

 * 
 * Prevents the game state changing to ARREST state due to the player arrest state changing
 * e.g. due to player being arrested by police etc. Should be called each frame to prevent state
 * transition.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function preventArrestStateThisFrame(): void {
	const preventArrestStateThisFrame_result = Citizen.invokeNative<void>('0xD4930C902E5CD6B6', );
	return preventArrestStateThisFrame_result;
}