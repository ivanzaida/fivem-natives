/**
 * STATS:STAT_GET_BLOCK_SAVES
 *
 * 0x5927F0EB6A8C0001

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statGetBlockSaves(): boolean {
	const statGetBlockSaves_result = Citizen.invokeNative<boolean>('0x5927F0EB6A8C0001', );
	return statGetBlockSaves_result;
}