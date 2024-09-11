import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_GRAVITY_AMOUNT
 *
 * 0XB48A1292

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleGravityAmount(vehicle: VehicleIndex): number {
	const getVehicleGravityAmount_result = Citizen.invokeNative<number>('0XB48A1292', vehicle);
	return getVehicleGravityAmount_result;
}