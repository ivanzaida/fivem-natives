import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_IGNORE_PLANES_SMALL_PITCH_CHANGE
 *
 * 0x1A1E025C1EDC00AB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} ignorePitching
 */
export function setIgnorePlanesSmallPitchChange(vehicle: VehicleIndex, ignorePitching: boolean): void {
	const setIgnorePlanesSmallPitchChange_result = Citizen.invokeNative<void>('0x1A1E025C1EDC00AB', vehicle, ignorePitching);
	return setIgnorePlanesSmallPitchChange_result;
}