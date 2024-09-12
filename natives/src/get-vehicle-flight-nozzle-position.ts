import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_FLIGHT_NOZZLE_POSITION
 *
 * 0xCEE6D67EEF78C2D7

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} plane
 * @returns {number}  
 */
export function getVehicleFlightNozzlePosition(plane: EntityIndex): number {
	const getVehicleFlightNozzlePosition_result = Citizen.invokeNative<number>('0xCEE6D67EEF78C2D7', plane);
	return getVehicleFlightNozzlePosition_result;
}