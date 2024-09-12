/**
 * CFX:GET_INSTANCE_ID
 *
 * 0x9F1C4383

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getInstanceId(): number {
	const getInstanceId_result = Citizen.invokeNative<number>('0x9F1C4383', );
	return getInstanceId_result;
}