import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:ADD_DOOR_TO_SYSTEM
 *
 * 0xB80B2E08713B8BC6

 * 
 * doorHash has to be unique. scriptDoor false; relies upon getNetworkGameScriptHandler. isLocal On true disables the creation CRequestDoorEvent's in DOOR_SYSTEM_SET_DOOR_STATE.
 * p5 only set to true in single player native scripts.
 * If scriptDoor is true, register the door on the script handler host (note: there's a hardcap on the number of script IDs that can be added to the system at a given time). If scriptDoor and isLocal are both false, the door is considered to be in a "Persists w/o netobj" state.
 * 
 * door hashes normally look like PROP_[int]_DOOR_[int] for interior doors and PROP_BUILDING_[int]_DOOR_[int] exterior doors but you can just make up your own hash if you want
 * All doors need to be registered with ADD_DOOR_TO_SYSTEM before they can be manipulated with the door natives and the easiest way to get door models is just find the door in codewalker.
 * 
 * Example: AddDoorToSystem("PROP_43_DOOR_0", "hei_v_ilev_fh_heistdoor2", -1456.818, -520.5037, 69.67043, 0, 0, 0)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @param {ModelNames} objectModelHashKey
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {boolean} useOldOverrides
 * @param {boolean} network
 * @param {boolean} permanent
 */
export function addDoorToSystem(doorEnumHash: number, objectModelHashKey: ModelNames, vecPosX: number, vecPosY: number, vecPosZ: number, useOldOverrides: boolean = true, network: boolean = true, permanent: boolean = false): void {
	const addDoorToSystem_result = Citizen.invokeNative<void>('0xB80B2E08713B8BC6', doorEnumHash, objectModelHashKey, vecPosX, vecPosY, vecPosZ, useOldOverrides, network, permanent);
	return addDoorToSystem_result;
}