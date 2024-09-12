/**
 * GRAPHICS:CLEAR_STATUS_OF_SORTED_LIST_OPERATION
 *
 * 0x60B12E049FB8FF1C

 * 
 * ------------------------------------------------------------------
 */
export function clearStatusOfSortedListOperation(): void {
	const clearStatusOfSortedListOperation_result = Citizen.invokeNative<void>('0x60B12E049FB8FF1C', );
	return clearStatusOfSortedListOperation_result;
}