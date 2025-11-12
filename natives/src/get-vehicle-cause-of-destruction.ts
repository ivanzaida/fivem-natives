import { VehicleIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CAUSE_OF_DESTRUCTION
 *
 * 0xC713B16D0F5FBF9D

 * 
 * iVar3 = get_vehicle_cause_of_destruction(uLocal_248[iVar2]);
 * if (iVar3 == joaat("weapon_stickybomb"))
 * {
 * 	func_171(726);
 * 	iLocal_260 = 1;
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EWeaponType}  
 */
export function getVehicleCauseOfDestruction(vehicle: VehicleIndex): EWeaponType {
	const getVehicleCauseOfDestruction_result = Citizen.invokeNative<EWeaponType>('0xC713B16D0F5FBF9D', vehicle);
	return getVehicleCauseOfDestruction_result;
}