import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MAX_BRAKING
 *
 * 0xCDAF96205BABA4DC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleMaxBraking(vehicle: VehicleIndex): number {
	const getVehicleMaxBraking_result = Citizen.invokeNative<number>('0xCDAF96205BABA4DC', vehicle);
	return getVehicleMaxBraking_result;
}