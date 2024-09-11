/**
 * MISC:IS_MEMORY_CARD_IN_USE
 *
 * 0x8B27A086F4268F56

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMemoryCardInUse(): boolean {
	const isMemoryCardInUse_result = Citizen.invokeNative<boolean>('0x8B27A086F4268F56', );
	return isMemoryCardInUse_result;
}