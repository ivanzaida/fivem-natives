/**
 * NETWORK:UGC_HAS_MODIFY_FINISHED
 *
 * 0xBE4DBB4B94FDD19D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcHasModifyFinished(): boolean {
	const ugcHasModifyFinished_result = Citizen.invokeNative<boolean>('0xBE4DBB4B94FDD19D', );
	return ugcHasModifyFinished_result;
}