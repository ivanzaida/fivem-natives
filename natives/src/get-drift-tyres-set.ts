import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_DRIFT_TYRES_SET
 *
 * 0x4497678941C27E46

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getDriftTyresSet(vehicle: VehicleIndex): boolean {
	const getDriftTyresSet_result = Citizen.invokeNative<boolean>('0x4497678941C27E46', vehicle);
	return getDriftTyresSet_result;
}