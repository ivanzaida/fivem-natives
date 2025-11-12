import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRANSFORM_TO_SUBMARINE_USES_ALTERNATE_INPUT
 *
 * 0xF2C91BA157882B97

 * 
 * When set to true, the key to transform a car to submarine mode changes from raise/lower convertible roof (hold H by default) to special vehicle transform (press X by default.)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useAlternateInput
 */
export function setTransformToSubmarineUsesAlternateInput(vehicle: VehicleIndex, useAlternateInput: boolean): void {
	const setTransformToSubmarineUsesAlternateInput_result = Citizen.invokeNative<void>('0xF2C91BA157882B97', vehicle, useAlternateInput);
	return setTransformToSubmarineUsesAlternateInput_result;
}