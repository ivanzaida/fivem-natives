/**
 * HUD:IS_PAUSE_MENU_RESTARTING
 *
 * 0xD3F2DA22950AB7F6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPauseMenuRestarting(): boolean {
	const isPauseMenuRestarting_result = Citizen.invokeNative<boolean>('0xD3F2DA22950AB7F6', );
	return isPauseMenuRestarting_result;
}