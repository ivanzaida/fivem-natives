/**
 * PLAYER:FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME
 *
 * 0x3A9A35C27C7B6D3C

 * 
 * This command works in the same way as FORCE_CLEANUP but only affects script threads with the given name
 * 
 * PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME("pb_prostitute", 1); // Found in decompilation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {number} forceCleanupBitField
 */
export function forceCleanupForAllThreadsWithThisName(name: string, forceCleanupBitField: number = 1): void {
	const forceCleanupForAllThreadsWithThisName_result = Citizen.invokeNative<void>('0x3A9A35C27C7B6D3C', name, forceCleanupBitField);
	return forceCleanupForAllThreadsWithThisName_result;
}