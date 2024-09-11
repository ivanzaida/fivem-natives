/**
 * CFX:CANCEL_EVENT
 *
 * 0XFA29D35D

 * Cancels the currently executing event.
 * 
 * ------------------------------------------------------------------
 */
export function cancelEvent(): void {
	const cancelEvent_result = Citizen.invokeNative<void>('0XFA29D35D', );
	return cancelEvent_result;
}