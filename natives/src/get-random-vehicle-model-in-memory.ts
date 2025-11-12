import { IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_RANDOM_VEHICLE_MODEL_IN_MEMORY
 *
 * 0xA50C5A6FC93D3B49

 * 
 * Not present in the retail version! It's just a nullsub.
 * 
 * p0 always true (except in one case)
 * successIndicator: 0 if success, -1 if failed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onlyPickNormalCarsFlag
 * @param {IntRef} outVehicleModelHashKey [Ref]
 * @param {IntRef} outVehicleClass [Ref]
 */
export function getRandomVehicleModelInMemory(onlyPickNormalCarsFlag: boolean, outVehicleModelHashKey: IntRef /* ptr */, outVehicleClass: IntRef /* ptr */): void {
	const getRandomVehicleModelInMemory_result = Citizen.invokeNative<void>('0xA50C5A6FC93D3B49', onlyPickNormalCarsFlag, outVehicleModelHashKey.dataView, outVehicleClass.dataView);
	return getRandomVehicleModelInMemory_result;
}