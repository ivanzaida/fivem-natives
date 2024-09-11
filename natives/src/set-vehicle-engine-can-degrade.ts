import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ENGINE_CAN_DEGRADE
 *
 * 0xF9DF73BCBDB93008

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableDegrading
 */
export function setVehicleEngineCanDegrade(vehicle: VehicleIndex, enableDegrading: boolean): void {
	const setVehicleEngineCanDegrade_result = Citizen.invokeNative<void>('0xF9DF73BCBDB93008', vehicle, enableDegrading);
	return setVehicleEngineCanDegrade_result;
}