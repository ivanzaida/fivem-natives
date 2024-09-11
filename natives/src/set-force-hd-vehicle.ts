import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORCE_HD_VEHICLE
 *
 * 0x2814BEDF5E0AF4C0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceHd
 */
export function setForceHdVehicle(vehicle: VehicleIndex, forceHd: boolean): void {
	const setForceHdVehicle_result = Citizen.invokeNative<void>('0x2814BEDF5E0AF4C0', vehicle, forceHd);
	return setForceHdVehicle_result;
}