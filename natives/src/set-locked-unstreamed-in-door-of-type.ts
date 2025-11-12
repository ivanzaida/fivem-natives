import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE
 *
 * 0x6421C7C9616E4305

 * 
 * Hardcoded not to work in multiplayer environments.
 * When you set locked to 0 the door open and to 1 the door close
 * OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 0, 0.0, 50.0, 0);  //door open
 * 
 * OBJECT::SET_LOCKED_UNSTREAMED_IN_DOOR_OF_TYPE(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 1, 0.0, 50.0, 0);  //door close
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} objectModelHashKey
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {boolean} lockState
 * @param {number} automaticRate
 * @param {number} automaticDist
 * @param {number} openRatio
 */
export function setLockedUnstreamedInDoorOfType(objectModelHashKey: ModelNames, vecPosX: number, vecPosY: number, vecPosZ: number, lockState: boolean, automaticRate: number = 0, automaticDist: number = 0, openRatio: number = 0): void {
	const setLockedUnstreamedInDoorOfType_result = Citizen.invokeNative<void>('0x6421C7C9616E4305', objectModelHashKey, vecPosX, vecPosY, vecPosZ, lockState, automaticRate, automaticDist, openRatio);
	return setLockedUnstreamedInDoorOfType_result;
}