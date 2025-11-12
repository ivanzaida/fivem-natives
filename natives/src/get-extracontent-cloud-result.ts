/**
 * DLC:GET_EXTRACONTENT_CLOUD_RESULT
 *
 * 0x3FB25645DE01436C

 * 
 * Gets the status of the extracontent cloud transfers
 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getExtracontentCloudResult(): number {
	const getExtracontentCloudResult_result = Citizen.invokeNative<number>('0x3FB25645DE01436C', );
	return getExtracontentCloudResult_result;
}