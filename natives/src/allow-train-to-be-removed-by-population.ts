import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ALLOW_TRAIN_TO_BE_REMOVED_BY_POPULATION
 *
 * 0x1A6B031C358F6071

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function allowTrainToBeRemovedByPopulation(vehicle: VehicleIndex): void {
	const allowTrainToBeRemovedByPopulation_result = Citizen.invokeNative<void>('0x1A6B031C358F6071', vehicle);
	return allowTrainToBeRemovedByPopulation_result;
}