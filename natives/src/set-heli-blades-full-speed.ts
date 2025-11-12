import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_BLADES_FULL_SPEED
 *
 * 0xA9F7300B498DDED7

 * 
 * Equivalent of SET_HELI_BLADES_SPEED(vehicleHandle, 1.0f);
 * 
 * this native works on planes to?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setHeliBladesFullSpeed(vehicle: VehicleIndex): void {
	const setHeliBladesFullSpeed_result = Citizen.invokeNative<void>('0xA9F7300B498DDED7', vehicle);
	return setHeliBladesFullSpeed_result;
}