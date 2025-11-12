import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CREATE_MISSION_TRAIN
 *
 * 0x767956351E028F74

 * 
 * Train models HAVE TO be loaded (requested) before you use this.
 * For variation 15 - request:
 * 
 * freight
 * freightcar
 * freightgrain
 * freightcont1
 * freightcont2
 * freighttrailer
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} carriageConfiguration
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} directionFlag
 * @param {boolean} registerAsNetworkObject
 * @param {boolean} scriptHostObject
 * @returns {VehicleIndex}  
 */
export function createMissionTrain(carriageConfiguration: number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, directionFlag: boolean, registerAsNetworkObject: boolean = false, scriptHostObject: boolean = false): VehicleIndex {
	const createMissionTrain_result = Citizen.invokeNative<VehicleIndex>('0x767956351E028F74', carriageConfiguration, newCoorsX, newCoorsY, newCoorsZ, directionFlag, registerAsNetworkObject, scriptHostObject);
	return createMissionTrain_result;
}