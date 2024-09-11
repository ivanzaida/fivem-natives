import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:_0x85FC953F6C6CBDE1
 *
 * 0x7B92F87655ED3C29

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} p1
 */
export function n_0x85Fc953F6C6Cbde1(vehicle: VehicleIndex, p1: boolean): void {
	const n_0x85Fc953F6C6Cbde1_result = Citizen.invokeNative<void>('0x7B92F87655ED3C29', vehicle, p1);
	return n_0x85Fc953F6C6Cbde1_result;
}