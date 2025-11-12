import { VehicleIndex, EScWheelList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HYDRAULIC_SUSPENSION_RAISE_FACTOR
 *
 * 0x0987D0FA30D602B0

 * 
 * Works only on vehicles that support hydraulics.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScWheelList} wheelNumber
 * @param {number} raiseFactor
 */
export function setHydraulicSuspensionRaiseFactor(vehicle: VehicleIndex, wheelNumber: EScWheelList | number, raiseFactor: number): void {
	const setHydraulicSuspensionRaiseFactor_result = Citizen.invokeNative<void>('0x0987D0FA30D602B0', vehicle, wheelNumber, raiseFactor);
	return setHydraulicSuspensionRaiseFactor_result;
}