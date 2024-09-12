/**
 * NETWORK:NETWORK_SET_SCRIPT_AUTOMUTED
 *
 * 0x89C96510735202D2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAutoMuted
 * @returns {boolean}  
 */
export function networkSetScriptAutomuted(isAutoMuted: boolean): boolean {
	const networkSetScriptAutomuted_result = Citizen.invokeNative<boolean>('0x89C96510735202D2', isAutoMuted);
	return networkSetScriptAutomuted_result;
}