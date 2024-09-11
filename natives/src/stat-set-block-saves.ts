/**
 * STATS:STAT_SET_BLOCK_SAVES
 *
 * 0xC88945F4DD99D7E0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} blocksaves
 */
export function statSetBlockSaves(blocksaves: boolean): void {
	const statSetBlockSaves_result = Citizen.invokeNative<void>('0xC88945F4DD99D7E0', blocksaves);
	return statSetBlockSaves_result;
}