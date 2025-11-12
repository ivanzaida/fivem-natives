import { VehicleIndex, EConvertibleRoofState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_CONVERTIBLE_ROOF_STATE
 *
 * 0x54DA32C15F7A6ABA

 * 
 * Get the current state of a convertible roof
 * 
 * 0 -> up
 * 1 -> lowering down
 * 2 -> down
 * 3 -> raising up
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EConvertibleRoofState}  
 */
export function getConvertibleRoofState(vehicle: VehicleIndex): EConvertibleRoofState {
	const getConvertibleRoofState_result = Citizen.invokeNative<EConvertibleRoofState>('0x54DA32C15F7A6ABA', vehicle);
	return getConvertibleRoofState_result;
}