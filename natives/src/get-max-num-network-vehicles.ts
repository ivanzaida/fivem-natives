/**
 * NETWORK:GET_MAX_NUM_NETWORK_VEHICLES
 *
 * 0xD544869339AEE474

 * 
 * Returns the maximum number of vehicles supported by the network game. This includes those
 * available for use by the ambient population.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaxNumNetworkVehicles(): number {
	const getMaxNumNetworkVehicles_result = Citizen.invokeNative<number>('0xD544869339AEE474', );
	return getMaxNumNetworkVehicles_result;
}