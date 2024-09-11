import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_INFLUENCES_WANTED_LEVEL
 *
 * 0xAA588DD56719AE3A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} influenceWantedLevel
 */
export function setVehicleInfluencesWantedLevel(vehicle: VehicleIndex, influenceWantedLevel: boolean): void {
	const setVehicleInfluencesWantedLevel_result = Citizen.invokeNative<void>('0xAA588DD56719AE3A', vehicle, influenceWantedLevel);
	return setVehicleInfluencesWantedLevel_result;
}