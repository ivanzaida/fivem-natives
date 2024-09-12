/**
 * HUD:IS_NAVIGATING_MENU_CONTENT
 *
 * 0xBFF5E63E718E2059

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isNavigatingMenuContent(): boolean {
	const isNavigatingMenuContent_result = Citizen.invokeNative<boolean>('0xBFF5E63E718E2059', );
	return isNavigatingMenuContent_result;
}