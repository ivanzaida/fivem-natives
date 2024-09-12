import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HAS_RETRACTABLE_WHEELS
 *
 * 0xBFDFDBE09E616B61

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getHasRetractableWheels(vehicle: VehicleIndex): boolean {
	const getHasRetractableWheels_result = Citizen.invokeNative<boolean>('0xBFDFDBE09E616B61', vehicle);
	return getHasRetractableWheels_result;
}