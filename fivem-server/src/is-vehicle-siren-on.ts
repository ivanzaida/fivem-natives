import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_SIREN_ON
 *
 * 0X25EB5873

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleSirenOn(vehicle: VehicleIndex): boolean {
	const isVehicleSirenOn_result = Citizen.invokeNative<boolean>('0X25EB5873', vehicle);
	return isVehicleSirenOn_result;
}