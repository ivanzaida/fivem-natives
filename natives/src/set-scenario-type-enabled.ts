/**
 * TASK:SET_SCENARIO_TYPE_ENABLED
 *
 * 0x470041F66BF345BA

 * Full list of scenario types used in scripts by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * seems to enable/disable specific scenario-types from happening in the game world.
 * Here are some scenario types from the scripts:
 * "WORLD_MOUNTAIN_LION_REST"
 * "WORLD_MOUNTAIN_LION_WANDER"
 * "DRIVE"
 * "WORLD_VEHICLE_POLICE_BIKE"
 * "WORLD_VEHICLE_POLICE_CAR"
 * "WORLD_VEHICLE_POLICE_NEXT_TO_CAR"
 * "WORLD_VEHICLE_DRIVE_SOLO"
 * "WORLD_VEHICLE_BIKER"
 * "WORLD_VEHICLE_DRIVE_PASSENGERS"
 * "WORLD_VEHICLE_SALTON_DIRT_BIKE"
 * "WORLD_VEHICLE_BICYCLE_MOUNTAIN"
 * "PROP_HUMAN_SEAT_CHAIR"
 * "WORLD_VEHICLE_ATTRACTOR"
 * "WORLD_HUMAN_LEANING"
 * "WORLD_HUMAN_HANG_OUT_STREET"
 * "WORLD_HUMAN_DRINKING"
 * "WORLD_HUMAN_SMOKING"
 * "WORLD_HUMAN_GUARD_STAND"
 * "WORLD_HUMAN_CLIPBOARD"
 * "WORLD_HUMAN_HIKER"
 * "WORLD_VEHICLE_EMPTY"
 * "WORLD_VEHICLE_BIKE_OFF_ROAD_RACE"
 * "WORLD_HUMAN_PAPARAZZI"
 * "WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN"
 * "WORLD_VEHICLE_PARK_PARALLEL"
 * "WORLD_VEHICLE_CONSTRUCTION_SOLO"
 * "WORLD_VEHICLE_CONSTRUCTION_PASSENGERS"
 * "WORLD_VEHICLE_TRUCK_LOGS"
 * scenarioType could be the same as scenarioName, used in for example TASK::TASK_START_SCENARIO_AT_POSITION.
 * 
 * ------------------------------------------------------------------
 * @param {string} scenarioTypeName
 * @param {boolean} enabled
 */
export function setScenarioTypeEnabled(scenarioTypeName: string, enabled: boolean): void {
	const setScenarioTypeEnabled_result = Citizen.invokeNative<void>('0x470041F66BF345BA', scenarioTypeName, enabled);
	return setScenarioTypeEnabled_result;
}