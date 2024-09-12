import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_MISSION_TRAIN
 *
 * 0xF2A5706EAF041CB1

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train
 * @returns {boolean}  
 */
export function isMissionTrain(train: VehicleIndex): boolean {
	const isMissionTrain_result = Citizen.invokeNative<boolean>('0xF2A5706EAF041CB1', train);
	return isMissionTrain_result;
}