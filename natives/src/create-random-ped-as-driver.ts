import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PED:CREATE_RANDOM_PED_AS_DRIVER
 *
 * 0x3CD322135CF08E09

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} ignoreDriverRestriction
 * @returns {PedIndex}  
 */
export function createRandomPedAsDriver(vehicle: VehicleIndex, ignoreDriverRestriction: boolean = true): PedIndex {
	const createRandomPedAsDriver_result = Citizen.invokeNative<PedIndex>('0x3CD322135CF08E09', vehicle, ignoreDriverRestriction);
	return createRandomPedAsDriver_result;
}