/**
 * CFX:GET_NUM_RESOURCES
 *
 * 0x863F27B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumResources(): number {
	const getNumResources_result = Citizen.invokeNative<number>('0x863F27B', );
	return getNumResources_result;
}