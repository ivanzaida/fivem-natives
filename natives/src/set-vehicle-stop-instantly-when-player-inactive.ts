import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STOP_INSTANTLY_WHEN_PLAYER_INACTIVE
 *
 * 0xCA609B4171C43CE1

 * 
 * Sets whether a player controlled vehicle will stop instantly when the
 * player's control is disabled (used in cutscenes etc).  Default is to stop instantly
 * 
 * sfink: sets bit in vehicle's structure, used by maintransition, fm_mission_controller, mission_race and a couple of other scripts. see dissassembly:
 * CVehicle __fastcall sub_140CDAA10(signed int a1, char a2)
 * {
 *     CVehicle result; // rax@1
 * 
 *     result = EntityAsCVehicle(a1);
 *     if ( result )
 *     {
 *         result->field_886 &= 0xEFu;
 *         result->field_886 |= 16  (a2 & 1);
 *     }
 *     return result;
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setVehicleStopInstantlyWhenPlayerInactive(vehicle: VehicleIndex, val: boolean): void {
	const setVehicleStopInstantlyWhenPlayerInactive_result = Citizen.invokeNative<void>('0xCA609B4171C43CE1', vehicle, val);
	return setVehicleStopInstantlyWhenPlayerInactive_result;
}