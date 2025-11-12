import { FloatRef } from '@ivanzaida/structures'

/**
 * ENTITY:FIND_ANIM_EVENT_PHASE
 *
 * 0xA2A6AE50772C4FDB

 * 
 * Use this to find an event tag in an animation and get it's start and end phase.
 * 
 * In the script "player_scene_t_bbfight.c4":
 * "if (ENTITY::FIND_ANIM_EVENT_PHASE(&l_16E, &l_19F[v_4/16/], v_9, &v_A, &v_B))"
 * -- &l_16E (p0) is requested as an anim dictionary earlier in the script.
 * -- &l_19F[v_4/16/] (p1) is used in other natives in the script as the "animation" param.
 * -- v_9 (p2) is instantiated as "victim_fall"; I'm guessing that's another anim
 * --v_A and v_B (p3 & p4) are both set as -1.0, but v_A is used immediately after this native for:
 * "if (v_A < ENTITY::GET_ENTITY_ANIM_CURRENT_TIME(...))"
 * Both v_A and v_B are seemingly used to contain both Vector3's and floats, so I can't say what either really is other than that they are both output parameters. p4 looks more like a Vector3 though
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictName
 * @param {string} animName
 * @param {string} eventName
 * @param {FloatRef} outStartPhase [Ref]
 * @param {FloatRef} outEndPhase [Ref]
 * @returns {boolean}  
 */
export function findAnimEventPhase(animDictName: string, animName: string, eventName: string, outStartPhase: FloatRef /* ptr */, outEndPhase: FloatRef /* ptr */): boolean {
	const findAnimEventPhase_result = Citizen.invokeNative<boolean>('0xA2A6AE50772C4FDB', animDictName, animName, eventName, outStartPhase.dataView, outEndPhase.dataView);
	return findAnimEventPhase_result;
}