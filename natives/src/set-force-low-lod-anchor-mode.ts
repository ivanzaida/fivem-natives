import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORCE_LOW_LOD_ANCHOR_MODE
 *
 * 0xB79D107D2E0D7E43

 * 
 * No observed effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forcePlayerLowLodAnchorFlag
 */
export function setForceLowLodAnchorMode(vehicle: VehicleIndex, forcePlayerLowLodAnchorFlag: boolean): void {
	const setForceLowLodAnchorMode_result = Citizen.invokeNative<void>('0xB79D107D2E0D7E43', vehicle, forcePlayerLowLodAnchorFlag);
	return setForceLowLodAnchorMode_result;
}