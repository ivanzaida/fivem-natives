/**
 * STREAMING:SET_SRL_READAHEAD_TIMES
 *
 * 0x216049890A2D1EC6

 * 
 * Determine how far in advance an SRL streams. By default, it's 3 seconds.
 * Call this right after calling PREFETCH_SRL().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} prestreamMap
 * @param {number} prestreamAssets
 * @param {number} playbackMap
 * @param {number} playbackAssets
 */
export function setSrlReadaheadTimes(prestreamMap: number, prestreamAssets: number, playbackMap: number, playbackAssets: number): void {
	const setSrlReadaheadTimes_result = Citizen.invokeNative<void>('0x216049890A2D1EC6', prestreamMap, prestreamAssets, playbackMap, playbackAssets);
	return setSrlReadaheadTimes_result;
}