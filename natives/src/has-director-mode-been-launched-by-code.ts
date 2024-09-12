/**
 * HUD:HAS_DIRECTOR_MODE_BEEN_LAUNCHED_BY_CODE
 *
 * 0x97246390EF16DFC3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasDirectorModeBeenLaunchedByCode(): boolean {
	const hasDirectorModeBeenLaunchedByCode_result = Citizen.invokeNative<boolean>('0x97246390EF16DFC3', );
	return hasDirectorModeBeenLaunchedByCode_result;
}