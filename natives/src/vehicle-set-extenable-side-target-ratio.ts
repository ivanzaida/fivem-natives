import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_EXTENABLE_SIDE_TARGET_RATIO
 *
 * 0xB2EEF26FE11993BB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} targetRatio
 * @returns {number}  
 */
export function vehicleSetExtenableSideTargetRatio(vehicle: VehicleIndex, targetRatio: number): number {
	const vehicleSetExtenableSideTargetRatio_result = Citizen.invokeNative<number>('0xB2EEF26FE11993BB', vehicle, targetRatio);
	return vehicleSetExtenableSideTargetRatio_result;
}