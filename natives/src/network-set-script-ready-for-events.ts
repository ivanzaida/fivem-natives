/**
 * NETWORK:NETWORK_SET_SCRIPT_READY_FOR_EVENTS
 *
 * 0x10B4F03DA622008C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} ready
 */
export function networkSetScriptReadyForEvents(ready: boolean): void {
	const networkSetScriptReadyForEvents_result = Citizen.invokeNative<void>('0x10B4F03DA622008C', ready);
	return networkSetScriptReadyForEvents_result;
}