import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_BLADES_SPEED
 *
 * 0xA83EE494110BC566

 * 
 * Sets the speed of the helicopter blades in percentage of the full speed.
 * 
 * vehicleHandle: The helicopter.
 * speed: The speed in percentage, 0.0f being 0% and 1.0f being 100%.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} speedRatio
 */
export function setHeliBladesSpeed(vehicle: VehicleIndex, speedRatio: number): void {
	const setHeliBladesSpeed_result = Citizen.invokeNative<void>('0xA83EE494110BC566', vehicle, speedRatio);
	return setHeliBladesSpeed_result;
}