import { PedIndex, EPedMotionState, EForceAnimAiUpdateState } from '@ivanzaida/structures'

/**
 * PED:FORCE_PED_MOTION_STATE
 *
 * 0x717804C8C8DA67BF

 * Can be used to force a particular movement pose and behaviour, for example when trying to
 * seamlessly end a canned animation, such as a cutscene or synchronized scene.
 * Regarding p2, p3 and p4: Most common is 0, 0, 0); followed by 0, 1, 0); and 1, 1, 0); in R scripts. p4 is very rarely something other than 0.
 * enum eMotionState // 0x92A659FE
 * {
 * 	MotionState_None = 0xEE717723,
 * 	MotionState_Idle = 0x9072A713,
 * 	MotionState_Walk = 0xD827C3DB,
 * 	MotionState_Run = 0xFFF7E7A4,
 * 	MotionState_Sprint = 0xBD8817DB,
 * 	MotionState_Crouch_Idle = 0x43FB099E,
 * 	MotionState_Crouch_Walk = 0x08C31A98,
 * 	MotionState_Crouch_Run = 0x3593CF09,
 * 	MotionState_DoNothing = 0x0EC17E58,
 * 	MotionState_AnimatedVelocity = 0x551AAC43,
 * 	MotionState_InVehicle = 0x94D9D58D,
 * 	MotionState_Aiming = 0x3F67C6AF,
 * 	MotionState_Diving_Idle = 0x4848CDED,
 * 	MotionState_Diving_Swim = 0x916E828C,
 * 	MotionState_Swimming_TreadWater = 0xD1BF11C7,
 * 	MotionState_Dead = 0x0DBB071C,
 * 	MotionState_Stealth_Idle = 0x422D7A25,
 * 	MotionState_Stealth_Walk = 0x042AB6A2,
 * 	MotionState_Stealth_Run = 0xFB0B79E1,
 * 	MotionState_Parachuting = 0xBAC0F10B,
 * 	MotionState_ActionMode_Idle = 0xDA40A0DC,
 * 	MotionState_ActionMode_Walk = 0xD2905EA7,
 * 	MotionState_ActionMode_Run = 0x31BADE14,
 * 	MotionState_Jetpack = 0x535E6A5E
 * };
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedMotionState} state
 * @param {boolean} shouldRestart When set to true, this will restart the state if it is already running
 * @param {EForceAnimAiUpdateState} exitstate
 * @param {boolean} forceAIPreCameraUpdate
 * @returns {boolean}  
 */
export function forcePedMotionState(ped: PedIndex, state: EPedMotionState | number, shouldRestart: boolean = false, exitstate: EForceAnimAiUpdateState | number = 0, forceAIPreCameraUpdate: boolean = false): boolean {
	const forcePedMotionState_result = Citizen.invokeNative<boolean>('0x717804C8C8DA67BF', ped, state, shouldRestart, exitstate, forceAIPreCameraUpdate);
	return forcePedMotionState_result;
}