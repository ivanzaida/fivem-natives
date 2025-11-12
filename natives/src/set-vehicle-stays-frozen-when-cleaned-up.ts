import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STAYS_FROZEN_WHEN_CLEANED_UP
 *
 * 0x336AED9579B3D098

 * 
 * Call this with TRUE if you've already called FREEZE_ENTITY_POSITION(TRUE) for this vehicle and you
 * want it to stay frozen even after it's marked as no longer needed
 * 
 * Has something to do with trains. Always precedes SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED.
 * May be true that it can be used with trains not sure, but not specifically for trains. Go find Xbox360 decompiled scripts and search for 'func_1333' in freemode.c it isn't used just for trains. Thanks for the info tho.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} staysFrozen
 */
export function setVehicleStaysFrozenWhenCleanedUp(vehicle: VehicleIndex, staysFrozen: boolean): void {
	const setVehicleStaysFrozenWhenCleanedUp_result = Citizen.invokeNative<void>('0x336AED9579B3D098', vehicle, staysFrozen);
	return setVehicleStaysFrozenWhenCleanedUp_result;
}