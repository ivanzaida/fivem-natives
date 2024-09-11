/**
 * STATS:STAT_CLEAR_PENDING_SAVES
 *
 * 0x2CB53B9DB9AB03C1

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 */
export function statClearPendingSaves(slot: number): void {
	const statClearPendingSaves_result = Citizen.invokeNative<void>('0x2CB53B9DB9AB03C1', slot);
	return statClearPendingSaves_result;
}