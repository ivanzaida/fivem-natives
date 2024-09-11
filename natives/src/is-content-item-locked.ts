/**
 * FILES:IS_CONTENT_ITEM_LOCKED
 *
 * 0x4BFA043D318BF9AE

 * 
 * ------------------------------------------------------------------
 * @param {number} lockHash
 * @returns {boolean}  
 */
export function isContentItemLocked(lockHash: number): boolean {
	const isContentItemLocked_result = Citizen.invokeNative<boolean>('0x4BFA043D318BF9AE', lockHash);
	return isContentItemLocked_result;
}