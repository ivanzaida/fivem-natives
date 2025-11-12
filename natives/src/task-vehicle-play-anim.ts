import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_PLAY_ANIM
 *
 * 0x3D98759970C5FCC9

 * 
 * Plays an anim on the specified vehicle
 * 
 * Most probably plays a specific animation on vehicle. For example getting chop out of van etc...
 * 
 * Here's how its used -
 * 
 * TASK::TASK_VEHICLE_PLAY_ANIM(l_325, "rcmnigel1b", "idle_speedo");
 * 
 * TASK::TASK_VEHICLE_PLAY_ANIM(l_556[0/1/], "missfra0_chop_drhome", "InCar_GetOutofBack_Speedo");
 * 
 * FYI : Speedo is the name of van in which chop was put in the mission.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} animDictName
 * @param {string} animName
 */
export function taskVehiclePlayAnim(vehicle: VehicleIndex, animDictName: string, animName: string): void {
	const taskVehiclePlayAnim_result = Citizen.invokeNative<void>('0x3D98759970C5FCC9', vehicle, animDictName, animName);
	return taskVehiclePlayAnim_result;
}