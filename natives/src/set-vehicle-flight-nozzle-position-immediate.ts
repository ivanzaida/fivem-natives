import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FLIGHT_NOZZLE_POSITION_IMMEDIATE
 *
 * 0x33D71CD5D987771E

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} plane
 * @param {number} nozzleRatio
 */
export function setVehicleFlightNozzlePositionImmediate(plane: EntityIndex, nozzleRatio: number): void {
	const setVehicleFlightNozzlePositionImmediate_result = Citizen.invokeNative<void>('0x33D71CD5D987771E', plane, nozzleRatio);
	return setVehicleFlightNozzlePositionImmediate_result;
}