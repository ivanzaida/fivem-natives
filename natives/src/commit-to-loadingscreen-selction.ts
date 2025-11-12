/**
 * SCRIPT:COMMIT_TO_LOADINGSCREEN_SELCTION
 *
 * 0x48AA9CAAAB71C7B8

 * 
 * Commit to the players selection of multiplayer or single player on the loading screen.
 * (This will also hide the button which can't be selected after this call)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function commitToLoadingscreenSelction(): void {
	const commitToLoadingscreenSelction_result = Citizen.invokeNative<void>('0x48AA9CAAAB71C7B8', );
	return commitToLoadingscreenSelction_result;
}