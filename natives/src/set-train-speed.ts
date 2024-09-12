import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAIN_SPEED
 *
 * 0x492EE2B9C9BD33C6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} newTrainSpeed
 */
export function setTrainSpeed(vehicle: VehicleIndex, newTrainSpeed: number): void {
	const setTrainSpeed_result = Citizen.invokeNative<void>('0x492EE2B9C9BD33C6', vehicle, newTrainSpeed);
	return setTrainSpeed_result;
}