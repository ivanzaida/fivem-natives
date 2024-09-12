import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_OVERRIDE_EXTENABLE_SIDE_RATIO
 *
 * 0x63CDE093822E42C4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} overrideRatio
 * @returns {number}  
 */
export function vehicleSetOverrideExtenableSideRatio(vehicle: VehicleIndex, overrideRatio: boolean): number {
	const vehicleSetOverrideExtenableSideRatio_result = Citizen.invokeNative<number>('0x63CDE093822E42C4', vehicle, overrideRatio);
	return vehicleSetOverrideExtenableSideRatio_result;
}