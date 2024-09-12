/**
 * NETWORK:NETWORK_WAITING_POP_CLEAR_TUTORIAL_SESSION
 *
 * 0xE794EA31F030A1D1

 * Returns whether the local player is currently waiting for all remaining population to have been removed or a timer for this has timed out after tutorial transistion.
 * Initially set true when NETWORK_START_SOLO_TUTORIAL_SESSION() or NETWORK_ALLOW_GANG_TO_JOIN_TUTORIAL_SESSION() or NETWORK_END_TUTORIAL_SESSION()
 * is called, and will only be set false some time after NETWORK_IS_TUTORIAL_SESSION_CHANGE_PENDING() has completed and returned false.
 * The criteria for being false will be if a timer has timed out or the all the population flagged for clearing has been cleared, whichever happens first.
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkWaitingPopClearTutorialSession(): boolean {
	const networkWaitingPopClearTutorialSession_result = Citizen.invokeNative<boolean>('0xE794EA31F030A1D1', );
	return networkWaitingPopClearTutorialSession_result;
}