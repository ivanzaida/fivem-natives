import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAUSES_SWERVING
 *
 * 0x52A6C42AB95EADB7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} causesSwerving
 */
export function setVehicleCausesSwerving(vehicle: VehicleIndex, causesSwerving: boolean): void {
	const setVehicleCausesSwerving_result = Citizen.invokeNative<void>('0x52A6C42AB95EADB7', vehicle, causesSwerving);
	return setVehicleCausesSwerving_result;
}