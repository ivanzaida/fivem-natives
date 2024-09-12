import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WEAPON_CAN_TARGET_OBJECTS
 *
 * 0x1A144C0743BF5890

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canTargetObjects
 */
export function setVehicleWeaponCanTargetObjects(vehicle: VehicleIndex, canTargetObjects: boolean): void {
	const setVehicleWeaponCanTargetObjects_result = Citizen.invokeNative<void>('0x1A144C0743BF5890', vehicle, canTargetObjects);
	return setVehicleWeaponCanTargetObjects_result;
}