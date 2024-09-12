import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLAY_PHONE_GESTURE_ANIMATION
 *
 * 0xF6ED7D9DE21CF122

 * Plays a gesture animation whilst using phone
 * Example from the scripts:
 * TASK::TASK_PLAY_PHONE_GESTURE_ANIMATION(PLAYER::PLAYER_PED_ID(), v_3, v_2, v_4, 0.25, 0.25, 0, 0);
 * =========================================================
 * ^^ No offense, but Idk how that would really help anyone.
 * As for the animDict & animation, they're both store in a global in all 5 scripts. So if anyone would be so kind as to read that global and comment what strings they use. Thanks.
 * Known boneMaskTypes'
 * "BONEMASK_HEADONLY"
 * "BONEMASK_HEAD_NECK_AND_ARMS"
 * "BONEMASK_HEAD_NECK_AND_L_ARM"
 * "BONEMASK_HEAD_NECK_AND_R_ARM"
 * p4 known args - 0.0f, 0.5f, 0.25f
 * p5 known args - 0.0f, 0.25f
 * p6 known args - 1 if a global if check is passed.
 * p7 known args - 1 if a global if check is passed.
 * The values found above, I found within the 5 scripts this is ever called in. (fmmc_launcher, fm_deathmatch_controller, fm_impromptu_dm_controller, fm_mission_controller, and freemode).
 * =========================================================
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} animName
 * @param {string} filterName
 * @param {number} taskBlendInDuration The time over which the task will blend in (in seconds)
 * @param {number} taskBlendOutDuration The time over which the task will blend out (in seconds)
 * @param {boolean} isLooping Specifies whether to loop animation or not
 * @param {boolean} holdLastFrame
 */
export function taskPlayPhoneGestureAnimation(ped: PedIndex, animDictName: string, animName: string, filterName: string, taskBlendInDuration: number = 0.125, taskBlendOutDuration: number = 0.125, isLooping: boolean = false, holdLastFrame: boolean = false): void {
	const taskPlayPhoneGestureAnimation_result = Citizen.invokeNative<void>('0xF6ED7D9DE21CF122', ped, animDictName, animName, filterName, taskBlendInDuration, taskBlendOutDuration, isLooping, holdLastFrame);
	return taskPlayPhoneGestureAnimation_result;
}