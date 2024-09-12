import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_SIREN_ON
 *
 * 0xE101D58DA98B6070

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleSirenOn(vehicle: VehicleIndex): boolean {
	const isVehicleSirenOn_result = Citizen.invokeNative<boolean>('0xE101D58DA98B6070', vehicle);
	return isVehicleSirenOn_result;
}