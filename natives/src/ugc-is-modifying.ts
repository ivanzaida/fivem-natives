/**
 * NETWORK:UGC_IS_MODIFYING
 *
 * 0x2DD9F4C2D128C690

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcIsModifying(): boolean {
	const ugcIsModifying_result = Citizen.invokeNative<boolean>('0x2DD9F4C2D128C690', );
	return ugcIsModifying_result;
}