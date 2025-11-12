/**
 * DLC:ARE_ANY_CCS_PENDING
 *
 * 0x822B00714BA99033

 * 
 * States whether or not any content change sets are pending
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areAnyCcsPending(): boolean {
	const areAnyCcsPending_result = Citizen.invokeNative<boolean>('0x822B00714BA99033', );
	return areAnyCcsPending_result;
}