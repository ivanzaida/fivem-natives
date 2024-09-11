import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FLIGHT_NOZZLE_POSITION
 *
 * 0x2808DFFEC5749CCF

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} plane
 * @param {number} nozzleRatio
 */
export function setVehicleFlightNozzlePosition(plane: EntityIndex, nozzleRatio: number): void {
	const setVehicleFlightNozzlePosition_result = Citizen.invokeNative<void>('0x2808DFFEC5749CCF', plane, nozzleRatio);
	return setVehicleFlightNozzlePosition_result;
}