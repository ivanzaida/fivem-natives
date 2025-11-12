import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HYDRAULICS_CONTROL
 *
 * 0x2B773DB19587707D

 * 
 * If false, lowers hydraulics (if raised) and disables hydraulics controls. If true, raises hydraulics and enables hydraulics controls.
 * 
 * Only used once in each carmod script, on a car that does not have hydraulics to begin with.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} raise
 */
export function setHydraulicsControl(vehicle: VehicleIndex, raise: boolean): void {
	const setHydraulicsControl_result = Citizen.invokeNative<void>('0x2B773DB19587707D', vehicle, raise);
	return setHydraulicsControl_result;
}