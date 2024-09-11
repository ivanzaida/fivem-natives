import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HANDBRAKE
 *
 * 0X483B013C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleHandbrake(vehicle: VehicleIndex): boolean {
	const getVehicleHandbrake_result = Citizen.invokeNative<boolean>('0X483B013C', vehicle);
	return getVehicleHandbrake_result;
}