import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_OVERRIDE_SIDE_RATIO
 *
 * 0x8AF1D691BC007513

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} targetRatio
 * @returns {number}  
 */
export function vehicleSetOverrideSideRatio(vehicle: VehicleIndex, targetRatio: number): number {
	const vehicleSetOverrideSideRatio_result = Citizen.invokeNative<number>('0x8AF1D691BC007513', vehicle, targetRatio);
	return vehicleSetOverrideSideRatio_result;
}