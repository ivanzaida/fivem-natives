/**
 * MISC:SET_THIS_SCRIPT_CAN_BE_PAUSED
 *
 * 0xAECC5FA98C879D67

 * 
 * ------------------------------------------------------------------
 * @param {boolean} scriptCanBePaused
 */
export function setThisScriptCanBePaused(scriptCanBePaused: boolean): void {
	const setThisScriptCanBePaused_result = Citizen.invokeNative<void>('0xAECC5FA98C879D67', scriptCanBePaused);
	return setThisScriptCanBePaused_result;
}