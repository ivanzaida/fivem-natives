import { NetworkIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NET_TO_VEH
 *
 * 0xE38610F405049F71

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} netID
 * @returns {VehicleIndex}  
 */
export function netToVeh(netID: NetworkIndex): VehicleIndex {
	const netToVeh_result = Citizen.invokeNative<VehicleIndex>('0xE38610F405049F71', netID);
	return netToVeh_result;
}