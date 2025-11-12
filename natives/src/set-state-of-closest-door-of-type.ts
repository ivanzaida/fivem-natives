import { ModelNames } from '@ivanzaida/structures'

/**
 * OBJECT:SET_STATE_OF_CLOSEST_DOOR_OF_TYPE
 *
 * 0x1F3E4227575DF103

 * 
 * To open and shut a door smoothly call every frame with bLockState=false as you increase/decrease the open/shut ratio
 * In your script tidyup you should reset the door to bLockState = false, fOpenRatio = 0.0 to release the door. Unless you specifically want the door to remain locked for ever more.
 * Get door position using helper widget: Rag Widgets -> Objects -> Show Door Info
 * 
 * Hardcoded to not work in multiplayer.
 * 
 * 
 * Used to lock/unlock doors to interior areas of the game.
 * 
 * (Possible) Door Types:
 * 
 * https://pastebin.com/9S2m3qA4
 * 
 * Heading is either 1, 0 or -1 in the scripts. Means default closed(0) or opened either into(1) or out(-1) of the interior.
 * Locked means that the heading is locked.
 * p6 is always 0.
 * 
 * 225 door types, model names and coords found in stripclub.c4:
 * https://pastebin.com/gywnbzsH
 * 
 * get door info: https://pastebin.com/i14rbekD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} objectModelHashKey
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {boolean} lockState
 * @param {number} openRatio
 * @param {boolean} removeSpring
 */
export function setStateOfClosestDoorOfType(objectModelHashKey: ModelNames, vecPosX: number, vecPosY: number, vecPosZ: number, lockState: boolean, openRatio: number, removeSpring: boolean = false): void {
	const setStateOfClosestDoorOfType_result = Citizen.invokeNative<void>('0x1F3E4227575DF103', objectModelHashKey, vecPosX, vecPosY, vecPosZ, lockState, openRatio, removeSpring);
	return setStateOfClosestDoorOfType_result;
}