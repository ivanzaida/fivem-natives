/**
 * NETWORK:NETWORK_SET_CURRENT_SPAWN_LOCATION_OPTION
 *
 * 0xDBCD5F83F8E84B5C

 * 
 * mpSettingSpawn:
 * 
 * enum eMpSettingSpawn
 * {
 * 	MP_SETTING_SPAWN_NULL,
 * 	MP_SETTING_SPAWN_PROPERTY,
 * 	MP_SETTING_SPAWN_LAST_POSITION,
 * 	MP_SETTING_SPAWN_GARAGE,
 * 	MP_SETTING_SPAWN_RANDOM,
 * 	MP_SETTING_SPAWN_PRIVATE_YACHT,
 * 	MP_SETTING_SPAWN_OFFICE,
 * 	MP_SETTING_SPAWN_CLUBHOUSE,
 * 	MP_SETTING_SPAWN_IE_WAREHOUSE,
 * 	MP_SETTING_SPAWN_BUNKER,
 * 	MP_SETTING_SPAWN_HANGAR,
 * 	MP_SETTING_SPAWN_DEFUNCT_BASE,
 * 	MP_SETTING_SPAWN_NIGHTCLUB,
 * 	MP_SETTING_SPAWN_ARENA_GARAGE,
 * 	MP_SETTING_SPAWN_CASINO_APARTMENT,
 * 	MP_SETTING_SPAWN_ARCADE,
 * 	MP_SETTING_SPAWN_SUBMARINE,
 * 	MP_SETTING_SPAWN_CAR_MEET,
 * 	MP_SETTING_SPAWN_AUTO_SHOP,
 * 	MP_SETTING_SPAWN_FIXER_HQ,
 * 	MP_SETTING_SPAWN_MAX,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newSpawnLocationOption
 */
export function networkSetCurrentSpawnLocationOption(newSpawnLocationOption: number): void {
	const networkSetCurrentSpawnLocationOption_result = Citizen.invokeNative<void>('0xDBCD5F83F8E84B5C', newSpawnLocationOption);
	return networkSetCurrentSpawnLocationOption_result;
}