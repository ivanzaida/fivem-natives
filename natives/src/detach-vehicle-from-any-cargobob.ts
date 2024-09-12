import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_VEHICLE_FROM_ANY_CARGOBOB
 *
 * 0x9A2C1A81F938D584

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function detachVehicleFromAnyCargobob(vehicle: VehicleIndex): boolean {
	const detachVehicleFromAnyCargobob_result = Citizen.invokeNative<boolean>('0x9A2C1A81F938D584', vehicle);
	return detachVehicleFromAnyCargobob_result;
}