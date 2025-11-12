/**
 * BRAIN:REACTIVATE_ALL_WORLD_BRAINS_THAT_ARE_WAITING_TILL_OUT_OF_RANGE
 *
 * 0x97620981EC3F7099

 * 
 * This command was added to help with debugging the brain scripts. All world point brains that are waiting for the player
 * to move out of range will be immediately set back to the active state.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function reactivateAllWorldBrainsThatAreWaitingTillOutOfRange(): void {
	const reactivateAllWorldBrainsThatAreWaitingTillOutOfRange_result = Citizen.invokeNative<void>('0x97620981EC3F7099', );
	return reactivateAllWorldBrainsThatAreWaitingTillOutOfRange_result;
}