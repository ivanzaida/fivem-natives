import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CAN_USE_HYDRAULICS
 *
 * 0x6B64B565F7C0BE14

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canUse
 */
export function setCanUseHydraulics(vehicle: VehicleIndex, canUse: boolean): void {
	const setCanUseHydraulics_result = Citizen.invokeNative<void>('0x6B64B565F7C0BE14', vehicle, canUse);
	return setCanUseHydraulics_result;
}