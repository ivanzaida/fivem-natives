import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_FLIGHT_NOZZLE_POSITION
 *
 * 0xAD40AD55

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check.
 * @returns {number}  
 */
export function getVehicleFlightNozzlePosition(vehicle: VehicleIndex): number {
	const getVehicleFlightNozzlePosition_result = Citizen.invokeNative<number>('0xAD40AD55', vehicle);
	return getVehicleFlightNozzlePosition_result;
}