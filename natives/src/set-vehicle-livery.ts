import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LIVERY
 *
 * 0xA1C03303EC67320B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} liveryID
 */
export function setVehicleLivery(vehicle: VehicleIndex, liveryID: number): void {
	const setVehicleLivery_result = Citizen.invokeNative<void>('0xA1C03303EC67320B', vehicle, liveryID);
	return setVehicleLivery_result;
}