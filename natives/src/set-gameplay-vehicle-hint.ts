import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_VEHICLE_HINT
 *
 * 0xB2BB7DF97FC211F9

 * 
 * Focuses the camera on the specified vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {boolean} relativeOffset The offset is relative to the entity.
 * @param {number} dwellTime How long cam looks at the entity.
 * @param {number} interpTo How long the interp to the hint is
 * @param {number} interpFrom
 */
export function setGameplayVehicleHint(vehicle: VehicleIndex, offsetX: number, offsetY: number, offsetZ: number, relativeOffset: boolean = true, dwellTime: number = 2000, interpTo: number = 2000, interpFrom: number = 2000): void {
	const setGameplayVehicleHint_result = Citizen.invokeNative<void>('0xB2BB7DF97FC211F9', vehicle, offsetX, offsetY, offsetZ, relativeOffset, dwellTime, interpTo, interpFrom);
	return setGameplayVehicleHint_result;
}