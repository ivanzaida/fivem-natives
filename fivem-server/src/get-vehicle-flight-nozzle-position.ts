import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_FLIGHT_NOZZLE_POSITION
 *
 * 0XAD40AD55

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} plane
 * @returns {number}  
 */
export function getVehicleFlightNozzlePosition(plane: EntityIndex): number {
	const getVehicleFlightNozzlePosition_result = Citizen.invokeNative<number>('0XAD40AD55', plane);
	return getVehicleFlightNozzlePosition_result;
}