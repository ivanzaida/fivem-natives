/**
 * NETWORK:UGC_CLEAR_CREATE_RESULT
 *
 * 0x082134CFF7DD01AA

 * 
 * ------------------------------------------------------------------
 */
export function ugcClearCreateResult(): void {
	const ugcClearCreateResult_result = Citizen.invokeNative<void>('0x082134CFF7DD01AA', );
	return ugcClearCreateResult_result;
}