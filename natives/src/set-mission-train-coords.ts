import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_MISSION_TRAIN_COORDS
 *
 * 0x0FCE057EE79E33FA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 */
export function setMissionTrainCoords(train: VehicleIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number): void {
	const setMissionTrainCoords_result = Citizen.invokeNative<void>('0x0FCE057EE79E33FA', train, newCoorsX, newCoorsY, newCoorsZ);
	return setMissionTrainCoords_result;
}