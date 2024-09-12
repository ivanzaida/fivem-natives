/**
 * NETWORK:UGC_HAS_GET_FINISHED
 *
 * 0xD1377E5E950FBDDA

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcHasGetFinished(): boolean {
	const ugcHasGetFinished_result = Citizen.invokeNative<boolean>('0xD1377E5E950FBDDA', );
	return ugcHasGetFinished_result;
}