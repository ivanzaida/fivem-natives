import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TRAIN_CRUISE_SPEED
 *
 * 0xCD56231706809D19

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} newTrainCruiseSpeed
 */
export function setTrainCruiseSpeed(vehicle: VehicleIndex, newTrainCruiseSpeed: number): void {
	const setTrainCruiseSpeed_result = Citizen.invokeNative<void>('0xCD56231706809D19', vehicle, newTrainCruiseSpeed);
	return setTrainCruiseSpeed_result;
}