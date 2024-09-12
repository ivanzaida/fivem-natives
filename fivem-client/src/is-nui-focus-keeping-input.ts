/**
 * CFX:IS_NUI_FOCUS_KEEPING_INPUT
 *
 * 0X39C9DC92

 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True or false.
 */
export function isNuiFocusKeepingInput(): boolean {
	const isNuiFocusKeepingInput_result = Citizen.invokeNative<boolean>('0X39C9DC92', );
	return isNuiFocusKeepingInput_result;
}