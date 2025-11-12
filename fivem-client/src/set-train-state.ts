import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_TRAIN_STATE
 *
 * 0x61CB74A0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @param {number} state The trains new state
 */
export function setTrainState(train: VehicleIndex, state: number): void {
	const setTrainState_result = Citizen.invokeNative<void>('0x61CB74A0', train, state);
	return setTrainState_result;
}