/**
 * MISC:REMOVE_DISPATCH_SPAWN_BLOCKING_AREA
 *
 * 0x2AF25F1F08FCBEF6

 * 
 * Removes a dispatch spawn blocking area with the given index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 */
export function removeDispatchSpawnBlockingArea(index: number): void {
	const removeDispatchSpawnBlockingArea_result = Citizen.invokeNative<void>('0x2AF25F1F08FCBEF6', index);
	return removeDispatchSpawnBlockingArea_result;
}