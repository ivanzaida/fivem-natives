/**
 * NETWORK:UGC_IS_GETTING
 *
 * 0x3076B63C4BC614DC

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcIsGetting(): boolean {
	const ugcIsGetting_result = Citizen.invokeNative<boolean>('0x3076B63C4BC614DC', );
	return ugcIsGetting_result;
}