import { PedIndex, EScriptLookFlag, EScriptLookPriority } from '@ivanzaida/structures'

/**
 * TASK:TASK_LOOK_AT_COORD
 *
 * 0xE237FA90A8AFEE59

 * 
 * enum eScriptLookatFlags
 * {
 * 	SLF_SLOW_TURN_RATE            = 1,    // turn the head toward the target slowly
 * 	SLF_FAST_TURN_RATE            = 2,    // turn the head toward the target quickly
 * 	SLF_EXTEND_YAW_LIMIT        = 4,    // wide yaw head limits
 * 	SLF_EXTEND_PITCH_LIMIT        = 8,    // wide pitch head limit
 * 	SLF_WIDEST_YAW_LIMIT        = 16,   // widest yaw head limit
 * 	SLF_WIDEST_PITCH_LIMIT        = 32,   // widest pitch head limit
 * 	SLF_NARROW_YAW_LIMIT        = 64,   // narrow yaw head limits
 * 	SLF_NARROW_PITCH_LIMIT        = 128,  // narrow pitch head limit
 * 	SLF_NARROWEST_YAW_LIMIT        = 256,  // narrowest yaw head limit
 * 	SLF_NARROWEST_PITCH_LIMIT    = 512,  // narrowest pitch head limit
 * 	SLF_USE_TORSO                = 1024, // use the torso aswell as the neck and head (currently disabled)
 * 	SLF_WHILE_NOT_IN_FOV        = 2048, // keep tracking the target even if they are not in the hard coded FOV
 * 	SLF_USE_CAMERA_FOCUS        = 4096, // use the camera as the target
 * 	SLF_USE_EYES_ONLY            = 8192, // only track the target with the eyes
 * 	SLF_USE_LOOK_DIR            = 16384, // use information in look dir DOF
 * 	SLF_FROM_SCRIPT                = 32768, // internal use only
 * 	SLF_USE_REF_DIR_ABSOLUTE    = 65536  // use absolute reference direction mode for solver
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} time
 * @param {EScriptLookFlag} lookFlags
 * @param {EScriptLookPriority} priority
 */
export function taskLookAtCoord(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, time: number, lookFlags: EScriptLookFlag | number = 0, priority: EScriptLookPriority | number = 2): void {
	const taskLookAtCoord_result = Citizen.invokeNative<void>('0xE237FA90A8AFEE59', ped, coorsX, coorsY, coorsZ, time, lookFlags, priority);
	return taskLookAtCoord_result;
}