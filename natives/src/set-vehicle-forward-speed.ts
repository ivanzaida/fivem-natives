import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FORWARD_SPEED
 *
 * 0x93C337B66C95C99B

 * 
 * SCALE: Setting the speed to 30 would result in a speed of roughly 60mph, according to speedometer.
 * 
 * Speed is in meters per second
 * You can convert meters/s to mph here:
 * http://www.calculateme.com/Speed/MetersperSecond/ToMilesperHour.htm
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} carSpeed
 */
export function setVehicleForwardSpeed(vehicle: VehicleIndex, carSpeed: number): void {
	const setVehicleForwardSpeed_result = Citizen.invokeNative<void>('0x93C337B66C95C99B', vehicle, carSpeed);
	return setVehicleForwardSpeed_result;
}