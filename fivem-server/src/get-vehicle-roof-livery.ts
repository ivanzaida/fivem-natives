import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_ROOF_LIVERY
 *
 * 0X872CF42

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleRoofLivery(vehicle: VehicleIndex): number {
	const getVehicleRoofLivery_result = Citizen.invokeNative<number>('0X872CF42', vehicle);
	return getVehicleRoofLivery_result;
}