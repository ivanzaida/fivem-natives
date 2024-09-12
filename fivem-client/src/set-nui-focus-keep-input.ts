/**
 * CFX:SET_NUI_FOCUS_KEEP_INPUT
 *
 * 0X3FF5E5F8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} keepInput
 */
export function setNuiFocusKeepInput(keepInput: boolean): void {
	const setNuiFocusKeepInput_result = Citizen.invokeNative<void>('0X3FF5E5F8', keepInput);
	return setNuiFocusKeepInput_result;
}