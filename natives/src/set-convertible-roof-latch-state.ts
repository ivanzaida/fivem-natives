import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CONVERTIBLE_ROOF_LATCH_STATE
 *
 * 0xC48C7879875CFB60

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} latched
 */
export function setConvertibleRoofLatchState(vehicle: VehicleIndex, latched: boolean): void {
	const setConvertibleRoofLatchState_result = Citizen.invokeNative<void>('0xC48C7879875CFB60', vehicle, latched);
	return setConvertibleRoofLatchState_result;
}