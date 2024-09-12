/**
 * NETWORK:UGC_HAS_PERMISSION_TO_WRITE
 *
 * 0xC33E7CBC06EC1A8D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ugcHasPermissionToWrite(): boolean {
	const ugcHasPermissionToWrite_result = Citizen.invokeNative<boolean>('0xC33E7CBC06EC1A8D', );
	return ugcHasPermissionToWrite_result;
}