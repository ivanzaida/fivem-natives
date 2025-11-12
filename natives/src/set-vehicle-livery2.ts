import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LIVERY2
 *
 * 0x5081B6C697A334D4

 * 
 * Used to set the secondary livery (the roof on Tornado Custom being one such example.)
 * 
 * Livery value is dependent on the amount of liveries present in the vehicle's texture dictionary, for Tornado Custom this would be 0-6.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} liveryID
 */
export function setVehicleLivery2(vehicle: VehicleIndex, liveryID: number): void {
	const setVehicleLivery2_result = Citizen.invokeNative<void>('0x5081B6C697A334D4', vehicle, liveryID);
	return setVehicleLivery2_result;
}