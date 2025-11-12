/**
 * BRAIN:REACTIVATE_ALL_OBJECT_BRAINS_THAT_ARE_WAITING_TILL_OUT_OF_RANGE
 *
 * 0x2DB5A63C4A5800E5

 * 
 * This command was added to help with debugging the brain scripts. All object brains that are waiting for the player
 * to move out of range will be immediately set back to the active state.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function reactivateAllObjectBrainsThatAreWaitingTillOutOfRange(): void {
	const reactivateAllObjectBrainsThatAreWaitingTillOutOfRange_result = Citizen.invokeNative<void>('0x2DB5A63C4A5800E5', );
	return reactivateAllObjectBrainsThatAreWaitingTillOutOfRange_result;
}