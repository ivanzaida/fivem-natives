import { ModelNames, BoolRef, FloatRef } from '@ivanzaida/structures'

/**
 * OBJECT:GET_STATE_OF_CLOSEST_DOOR_OF_TYPE
 *
 * 0x696D2AC31CB5932A

 * 
 * locked is 0 if no door is found
 * locked is 0 if door is unlocked
 * locked is 1 if door is found and unlocked.
 * 
 * -------------
 * the locked bool is either 0(unlocked)(false) or 1(locked)(true)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} objectModelHashKey
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {BoolRef} outLockState [Ref]
 * @param {FloatRef} outOpenRatio [Ref]
 */
export function getStateOfClosestDoorOfType(objectModelHashKey: ModelNames, vecPosX: number, vecPosY: number, vecPosZ: number, outLockState: BoolRef /* ptr */, outOpenRatio: FloatRef /* ptr */): void {
	const getStateOfClosestDoorOfType_result = Citizen.invokeNative<void>('0x696D2AC31CB5932A', objectModelHashKey, vecPosX, vecPosY, vecPosZ, outLockState.dataView, outOpenRatio.dataView);
	return getStateOfClosestDoorOfType_result;
}