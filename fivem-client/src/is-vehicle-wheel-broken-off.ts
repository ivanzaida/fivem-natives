import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_WHEEL_BROKEN_OFF
 *
 * 0xCF1BC668

 * Getter for [BREAK_OFF_VEHICLE_WHEEL](?_0xA274CADB).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} wheelIndex The wheel index.
 * @returns {boolean}  
 */
export function isVehicleWheelBrokenOff(vehicle: VehicleIndex, wheelIndex: number): boolean {
	const isVehicleWheelBrokenOff_result = Citizen.invokeNative<boolean>('0xCF1BC668', vehicle, wheelIndex);
	return isVehicleWheelBrokenOff_result;
}