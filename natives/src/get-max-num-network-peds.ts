/**
 * NETWORK:GET_MAX_NUM_NETWORK_PEDS
 *
 * 0x76C7AF1F094891FC

 * 
 * Returns the maximum number of peds supported by the network game. This includes those
 * available for use by the ambient population.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaxNumNetworkPeds(): number {
	const getMaxNumNetworkPeds_result = Citizen.invokeNative<number>('0x76C7AF1F094891FC', );
	return getMaxNumNetworkPeds_result;
}