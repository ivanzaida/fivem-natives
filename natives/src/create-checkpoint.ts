import { ECheckpointType, CheckpointIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:CREATE_CHECKPOINT
 *
 * 0xDCC9FF4954D6DCB1

 * 
 * If the checkpoint is a chevron then it will point towards scrVecPointAt. If it's a flag then scrVecPointAt will be ignored.
 * 
 * Creates a checkpoint. Returns the handle of the checkpoint.
 * 
 * 20/03/17 : Attention, checkpoints are already handled by the game itself, so you must not loop it like markers.
 * 
 * Parameters:
 *  type - The type of checkpoint to create. See below for a list of checkpoint types.
 *  pos1 - The position of the checkpoint.
 *  pos2 - The position of the next checkpoint to point to.
 *  radius - The radius of the checkpoint.
 *  color - The color of the checkpoint.
 *  reserved - Special parameter, see below for details. Usually set to 0 in the scripts.
 * 
 * Checkpoint types:
 * 0-4---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 5-9---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 10-14-------Ring: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 15-19-------1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 20-24-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 25-29-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 30-34-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 35-38-------Ring: Airplane Up, Left, Right, UpsideDown
 * 39----------?
 * 40----------Ring: just a ring
 * 41----------?
 * 42-44-------Cylinder w/ number (uses 'reserved' parameter)
 * 45-47-------Cylinder no arrow or number
 * 
 * If using type 42-44, reserved sets number / number and shape to display
 * 
 * 0-99------------Just numbers (0-99)
 * 100-109-----------------Arrow (0-9)
 * 110-119------------Two arrows (0-9)
 * 120-129----------Three arrows (0-9)
 * 130-139----------------Circle (0-9)
 * 140-149------------CycleArrow (0-9)
 * 150-159----------------Circle (0-9)
 * 160-169----Circle  w/ pointer (0-9)
 * 170-179-------Perforated ring (0-9)
 * 180-189----------------Sphere (0-9)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECheckpointType} checkpointType
 * @param {number} scrVecPositionX
 * @param {number} scrVecPositionY
 * @param {number} scrVecPositionZ
 * @param {number} scrVecPointAtX
 * @param {number} scrVecPointAtY
 * @param {number} scrVecPointAtZ
 * @param {number} size
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} colA
 * @param {number} num
 * @returns {CheckpointIndex}  
 */
export function createCheckpoint(checkpointType: ECheckpointType | number, scrVecPositionX: number, scrVecPositionY: number, scrVecPositionZ: number, scrVecPointAtX: number, scrVecPointAtY: number, scrVecPointAtZ: number, size: number, colR: number = 255, colG: number = 100, colB: number = 0, colA: number = 100, num: number = 0): CheckpointIndex {
	const createCheckpoint_result = Citizen.invokeNative<CheckpointIndex>('0xDCC9FF4954D6DCB1', checkpointType, scrVecPositionX, scrVecPositionY, scrVecPositionZ, scrVecPointAtX, scrVecPointAtY, scrVecPointAtZ, size, colR, colG, colB, colA, num);
	return createCheckpoint_result;
}