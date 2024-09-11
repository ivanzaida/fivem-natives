import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_FUEL_LEVEL
 *
 * 0X5F739BB8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleFuelLevel(vehicle: VehicleIndex): number {
	const getVehicleFuelLevel_result = Citizen.invokeNative<number>('0X5F739BB8', vehicle);
	return getVehicleFuelLevel_result;
}