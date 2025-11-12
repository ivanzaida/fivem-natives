/**
 * PLAYER:FORCE_CLEANUP
 *
 * 0xB1495D79F52B9EEE

 * 
 * This command will cause all scripts that are listening for the given force cleanup event to jump back to the HAS_FORCE_CLEANUP_OCCURRED line and continue processing from there.
 * 
 * used with 1,2,8,64,128 in the scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} forceCleanupBitField The type of force cleanup "event" to send out to all active scripts
 */
export function forceCleanup(forceCleanupBitField: number = 1): void {
	const forceCleanup_result = Citizen.invokeNative<void>('0xB1495D79F52B9EEE', forceCleanupBitField);
	return forceCleanup_result;
}