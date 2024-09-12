import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_SUSPENSION_HEIGHT
 *
 * 0xB3439A01

 * Sets the height of the vehicle's suspension.This changes the same value set by Suspension in the mod shop.Negatives values raise the car. Positive values lower the car.This is change is visual only. The collision of the vehicle will not move.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} newHeight
 */
export function setVehicleSuspensionHeight(vehicle: VehicleIndex, newHeight: number): void {
	const setVehicleSuspensionHeight_result = Citizen.invokeNative<void>('0xB3439A01', vehicle, newHeight);
	return setVehicleSuspensionHeight_result;
}