import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_FORWARD_CARRIAGE
 *
 * 0x24DC88D9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The handle of the carriage in front of this train in the chain. Otherwise returns 0 if the train has no carriage in front of it
 */
export function getTrainForwardCarriage(train: VehicleIndex): number {
	const getTrainForwardCarriage_result = Citizen.invokeNative<number>('0x24DC88D9', train);
	return getTrainForwardCarriage_result;
}