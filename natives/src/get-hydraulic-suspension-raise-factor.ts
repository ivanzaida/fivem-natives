import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HYDRAULIC_SUSPENSION_RAISE_FACTOR
 *
 * 0xB9E9F6A235CE5516

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @returns {number}  
 */
export function getHydraulicSuspensionRaiseFactor(vehicle: VehicleIndex, wheelNumber: EScWheelList | number): number {
	const getHydraulicSuspensionRaiseFactor_result = Citizen.invokeNative<number>('0xB9E9F6A235CE5516', vehicle, wheelNumber);
	return getHydraulicSuspensionRaiseFactor_result;
}