import { VehicleIndex, NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:VEH_TO_NET
 *
 * 0x913A6486719A87D2

 * 
 * calls from vehicle to net.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehID
 * @returns {NetworkIndex}  
 */
export function vehToNet(vehID: VehicleIndex): NetworkIndex {
	const vehToNet_result = Citizen.invokeNative<NetworkIndex>('0x913A6486719A87D2', vehID);
	return vehToNet_result;
}