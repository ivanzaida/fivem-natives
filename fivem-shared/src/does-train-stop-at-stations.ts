import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:DOES_TRAIN_STOP_AT_STATIONS
 *
 * 0x77CC80DC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {boolean}  True if the train stops at stations. False otherwise
 */
export function doesTrainStopAtStations(train: VehicleIndex): boolean {
	const doesTrainStopAtStations_result = Citizen.invokeNative<boolean>('0x77CC80DC', train);
	return doesTrainStopAtStations_result;
}