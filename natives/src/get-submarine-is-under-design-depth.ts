import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_SUBMARINE_IS_UNDER_DESIGN_DEPTH
 *
 * 0x6DBA6A508811E851

 * 
 * Get whether the submarine is under its design depth
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getSubmarineIsUnderDesignDepth(vehicle: VehicleIndex): boolean {
	const getSubmarineIsUnderDesignDepth_result = Citizen.invokeNative<boolean>('0x6DBA6A508811E851', vehicle);
	return getSubmarineIsUnderDesignDepth_result;
}