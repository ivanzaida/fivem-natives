/**
 * NETWORK:GET_MAX_NUM_NETWORK_OBJECTS
 *
 * 0x2E63B6CC2AFB0B51

 * 
 * Returns the maximum number of objects (i.e. crates) supported by the network game. This includes those
 * available for use by the ambient population.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaxNumNetworkObjects(): number {
	const getMaxNumNetworkObjects_result = Citizen.invokeNative<number>('0x2E63B6CC2AFB0B51', );
	return getMaxNumNetworkObjects_result;
}