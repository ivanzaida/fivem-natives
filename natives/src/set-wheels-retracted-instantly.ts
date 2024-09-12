import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_WHEELS_RETRACTED_INSTANTLY
 *
 * 0xC61B49A4C6C60411

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setWheelsRetractedInstantly(vehicle: VehicleIndex): void {
	const setWheelsRetractedInstantly_result = Citizen.invokeNative<void>('0xC61B49A4C6C60411', vehicle);
	return setWheelsRetractedInstantly_result;
}