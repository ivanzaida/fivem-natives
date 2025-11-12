import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_RUDDER_BROKEN
 *
 * 0x8A86075A9E1BF05A

 * 
 * Sets whether a rudder should be broken off or not
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} dissapear
 */
export function setVehicleRudderBroken(vehicle: VehicleIndex, dissapear: boolean): void {
	const setVehicleRudderBroken_result = Citizen.invokeNative<void>('0x8A86075A9E1BF05A', vehicle, dissapear);
	return setVehicleRudderBroken_result;
}