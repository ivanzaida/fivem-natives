import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_TRAIN_CARRIAGE
 *
 * 0xB5C59FDCC14C2F22

 * 
 * ReturnTrainCarriageID will be NULL if the carriage couldn't be found.
 * 
 * Corrected p1. it's basically the 'carriage/trailer number'. So if the train has 3 trailers you'd call the native once with a var or 3 times with 1, 2, 3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} trainEngine
 * @param {number} carriageNumber
 * @returns {VehicleIndex}  
 */
export function getTrainCarriage(trainEngine: VehicleIndex, carriageNumber: number): VehicleIndex {
	const getTrainCarriage_result = Citizen.invokeNative<VehicleIndex>('0xB5C59FDCC14C2F22', trainEngine, carriageNumber);
	return getTrainCarriage_result;
}