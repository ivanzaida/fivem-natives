/**
 * CFX:IS_NUI_FOCUSED
 *
 * 0x98545E6D

 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True or false.
 */
export function isNuiFocused(): boolean {
	const isNuiFocused_result = Citizen.invokeNative<boolean>('0x98545E6D', );
	return isNuiFocused_result;
}