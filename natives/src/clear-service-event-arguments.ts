/**
 * NETWORK:CLEAR_SERVICE_EVENT_ARGUMENTS
 *
 * 0x72CF8D8C29D8D5BD

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearServiceEventArguments(): void {
	const clearServiceEventArguments_result = Citizen.invokeNative<void>('0x72CF8D8C29D8D5BD', );
	return clearServiceEventArguments_result;
}