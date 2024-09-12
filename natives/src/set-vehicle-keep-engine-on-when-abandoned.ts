import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_KEEP_ENGINE_ON_WHEN_ABANDONED
 *
 * 0xC0DB690A927487AE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} keepEngineOn
 */
export function setVehicleKeepEngineOnWhenAbandoned(vehicle: VehicleIndex, keepEngineOn: boolean): void {
	const setVehicleKeepEngineOnWhenAbandoned_result = Citizen.invokeNative<void>('0xC0DB690A927487AE', vehicle, keepEngineOn);
	return setVehicleKeepEngineOnWhenAbandoned_result;
}