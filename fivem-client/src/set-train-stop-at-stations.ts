import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_TRAIN_STOP_AT_STATIONS
 *
 * 0xECB8B577

 * Toggles a train's ability to stop at stations
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @param {boolean} state True to make the train stop at stations. False to make the train not stop at stations
 */
export function setTrainStopAtStations(train: VehicleIndex, state: boolean): void {
	const setTrainStopAtStations_result = Citizen.invokeNative<void>('0xECB8B577', train, state);
	return setTrainStopAtStations_result;
}