/**
 * HUD:IS_HELP_MESSAGE_ON_SCREEN
 *
 * 0x3273F980CC5E02CD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHelpMessageOnScreen(): boolean {
	const isHelpMessageOnScreen_result = Citizen.invokeNative<boolean>('0x3273F980CC5E02CD', );
	return isHelpMessageOnScreen_result;
}