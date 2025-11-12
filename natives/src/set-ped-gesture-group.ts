import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_GESTURE_GROUP
 *
 * 0xA962F06E648B8941

 * 
 * From the scripts:
 * PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
 * "ANIM_GROUP_GESTURE_MISS_FRA0");
 * PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
 * "ANIM_GROUP_GESTURE_MISS_DocksSetup1");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} gestureGroup
 */
export function setPedGestureGroup(ped: PedIndex, gestureGroup: string): void {
	const setPedGestureGroup_result = Citizen.invokeNative<void>('0xA962F06E648B8941', ped, gestureGroup);
	return setPedGestureGroup_result;
}