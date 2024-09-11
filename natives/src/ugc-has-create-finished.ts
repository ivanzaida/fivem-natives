/**
 * NETWORK:UGC_HAS_CREATE_FINISHED
 *
 * 0x840A709B5493C918

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcHasCreateFinished(): boolean {
	const ugcHasCreateFinished_result = Citizen.invokeNative<boolean>('0x840A709B5493C918', );
	return ugcHasCreateFinished_result;
}