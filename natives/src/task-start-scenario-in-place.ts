import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_START_SCENARIO_IN_PLACE
 *
 * 0x21B9EFA4B4AA3A5B

 * Plays a scenario on a Ped at their current location.
 * unkDelay - Usually 0 or -1, doesn't seem to have any effect. Might be a delay between sequences.
 * playEnterAnim - Plays the "Enter" anim if true, otherwise plays the "Exit" anim. Scenarios that don't have any "Enter" anims won't play if this is set to true.
 * ----
 * From "am_hold_up.ysc.c4" at line 339:
 * TASK::TASK_START_SCENARIO_IN_PLACE(NETWORK::NET_TO_PED(l_8D._f4), sub_adf(), 0, 1);
 * I'm unsure of what the last two parameters are, however sub_adf() randomly returns 1 of 3 scenarios, those being:
 * WORLD_HUMAN_SMOKING
 * WORLD_HUMAN_HANG_OUT_STREET
 * WORLD_HUMAN_STAND_MOBILE
 * This makes sense, as these are what I commonly see when going by a liquor store.
 * -------------------------
 * List of scenarioNames: https://pastebin.com/6mrYTdQv
 * (^ Thank you so fucking much for this)
 * Also these:
 * WORLD_FISH_FLEE
 * DRIVE
 * WORLD_HUMAN_HIKER
 * WORLD_VEHICLE_ATTRACTOR
 * WORLD_VEHICLE_BICYCLE_MOUNTAIN
 * WORLD_VEHICLE_BIKE_OFF_ROAD_RACE
 * WORLD_VEHICLE_BIKER
 * WORLD_VEHICLE_CONSTRUCTION_PASSENGERS
 * WORLD_VEHICLE_CONSTRUCTION_SOLO
 * WORLD_VEHICLE_DRIVE_PASSENGERS
 * WORLD_VEHICLE_DRIVE_SOLO
 * WORLD_VEHICLE_EMPTY
 * WORLD_VEHICLE_PARK_PARALLEL
 * WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN
 * WORLD_VEHICLE_POLICE_BIKE
 * WORLD_VEHICLE_POLICE_CAR
 * WORLD_VEHICLE_POLICE_NEXT_TO_CAR
 * WORLD_VEHICLE_SALTON_DIRT_BIKE
 * WORLD_VEHICLE_TRUCK_LOGS
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} scenarioName
 * @param {number} timeToLeave
 * @param {boolean} playIntroClip
 */
export function taskStartScenarioInPlace(ped: PedIndex, scenarioName: string, timeToLeave: number = 0, playIntroClip: boolean = false): void {
	const taskStartScenarioInPlace_result = Citizen.invokeNative<void>('0x21B9EFA4B4AA3A5B', ped, scenarioName, timeToLeave, playIntroClip);
	return taskStartScenarioInPlace_result;
}