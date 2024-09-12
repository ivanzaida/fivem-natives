/**
 * CFX:ACTIVATE_TIMECYCLE_EDITOR
 *
 * 0XEEB9B76A

 * Activates built-in timecycle editing tool.
 * 
 * ------------------------------------------------------------------
 */
export function activateTimecycleEditor(): void {
	const activateTimecycleEditor_result = Citizen.invokeNative<void>('0XEEB9B76A', );
	return activateTimecycleEditor_result;
}