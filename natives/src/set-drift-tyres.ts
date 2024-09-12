import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DRIFT_TYRES
 *
 * 0x519F76A38952BBD0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} driftTyresFlag
 */
export function setDriftTyres(vehicle: VehicleIndex, driftTyresFlag: boolean): void {
	const setDriftTyres_result = Citizen.invokeNative<void>('0x519F76A38952BBD0', vehicle, driftTyresFlag);
	return setDriftTyres_result;
}