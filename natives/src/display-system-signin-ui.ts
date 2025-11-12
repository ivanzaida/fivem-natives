/**
 * PLAYER:DISPLAY_SYSTEM_SIGNIN_UI
 *
 * 0xC296E8407A7E3E69

 * 
 * This assumes there is a system-provided sign-in UI (as on Xbox Live).
 * 
 * Purpose of the BOOL currently unknown.
 * Both, true and false, work
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} force
 */
export function displaySystemSigninUi(force: boolean = false): void {
	const displaySystemSigninUi_result = Citizen.invokeNative<void>('0xC296E8407A7E3E69', force);
	return displaySystemSigninUi_result;
}