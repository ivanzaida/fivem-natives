/**
 * NETWORK:UGC_IS_CREATING
 *
 * 0xFA49944CF453C338

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcIsCreating(): boolean {
	const ugcIsCreating_result = Citizen.invokeNative<boolean>('0xFA49944CF453C338', );
	return ugcIsCreating_result;
}