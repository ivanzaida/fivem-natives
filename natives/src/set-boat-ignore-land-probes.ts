import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_IGNORE_LAND_PROBES
 *
 * 0x435687668B2C6D06

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} ignoreProbes
 */
export function setBoatIgnoreLandProbes(vehicle: VehicleIndex, ignoreProbes: boolean): void {
	const setBoatIgnoreLandProbes_result = Citizen.invokeNative<void>('0x435687668B2C6D06', vehicle, ignoreProbes);
	return setBoatIgnoreLandProbes_result;
}