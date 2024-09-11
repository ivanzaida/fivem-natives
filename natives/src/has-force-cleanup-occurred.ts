/**
 * PLAYER:HAS_FORCE_CLEANUP_OCCURRED
 *
 * 0x96CFB880BAC634CE

 * 
 * ------------------------------------------------------------------
 * @param {number} forceCleanupBitField
 * @returns {boolean}  
 */
export function hasForceCleanupOccurred(forceCleanupBitField: number = 3): boolean {
	const hasForceCleanupOccurred_result = Citizen.invokeNative<boolean>('0x96CFB880BAC634CE', forceCleanupBitField);
	return hasForceCleanupOccurred_result;
}