import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_INTERIOR_LIGHT_ON
 *
 * 0XA411F72C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleInteriorLightOn(vehicle: VehicleIndex): boolean {
	const isVehicleInteriorLightOn_result = Citizen.invokeNative<boolean>('0XA411F72C', vehicle);
	return isVehicleInteriorLightOn_result;
}