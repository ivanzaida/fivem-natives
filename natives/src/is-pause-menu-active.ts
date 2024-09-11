/**
 * HUD:IS_PAUSE_MENU_ACTIVE
 *
 * 0x4D9174D8796EA622

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPauseMenuActive(): boolean {
	const isPauseMenuActive_result = Citizen.invokeNative<boolean>('0x4D9174D8796EA622', );
	return isPauseMenuActive_result;
}