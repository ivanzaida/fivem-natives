import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:KNOCK_PED_OFF_VEHICLE
 *
 * 0x0C771CCC16BC7A60

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function knockPedOffVehicle(ped: PedIndex): void {
	const knockPedOffVehicle_result = Citizen.invokeNative<void>('0x0C771CCC16BC7A60', ped);
	return knockPedOffVehicle_result;
}