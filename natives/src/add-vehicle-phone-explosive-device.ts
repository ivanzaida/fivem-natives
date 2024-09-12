import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ADD_VEHICLE_PHONE_EXPLOSIVE_DEVICE
 *
 * 0xD213EC7C7B81BCEE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function addVehiclePhoneExplosiveDevice(vehicle: VehicleIndex): void {
	const addVehiclePhoneExplosiveDevice_result = Citizen.invokeNative<void>('0xD213EC7C7B81BCEE', vehicle);
	return addVehiclePhoneExplosiveDevice_result;
}