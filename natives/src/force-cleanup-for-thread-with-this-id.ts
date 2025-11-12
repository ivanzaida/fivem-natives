import { Threadid } from '@ivanzaida/structures'

/**
 * PLAYER:FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID
 *
 * 0xE1440F5C29913E5D

 * 
 * This command works in the same way as FORCE_CLEANUP but only affects the script thread with the given thread ID
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Threadid} threadId
 * @param {number} forceCleanupBitField
 */
export function forceCleanupForThreadWithThisId(threadId: Threadid, forceCleanupBitField: number = 1): void {
	const forceCleanupForThreadWithThisId_result = Citizen.invokeNative<void>('0xE1440F5C29913E5D', threadId, forceCleanupBitField);
	return forceCleanupForThreadWithThisId_result;
}