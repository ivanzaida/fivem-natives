import { PedIndex, RopeIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_RAPPEL_DOWN_WALL_USING_CLIPSET_OVERRIDE
 *
 * 0x82F4A39274853E9D

 * 
 * This command handles rappelling down the side of a building given a specific rope and a desired height
 * The specified ped will need to be in position prior to calling this task, otherwise he/she will be warped
 * 
 * Attaches a ped to a rope and allows player control to rappel down a wall. Disables all collisions while on the rope.
 * p10: Usually 1 in the scripts, clipSet: Clipset to use for the task, minZ: Minimum Z that the player can descend to, ropeHandle: Rope to attach this task to created with ADD_ROPE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} ropeAnchorPosX
 * @param {number} ropeAnchorPosY
 * @param {number} ropeAnchorPosZ
 * @param {number} destinationHeight
 * @param {RopeIndex} ropeID
 * @param {string} overridenClipSet Is the clipset that will be used to override the rappel animations
 * @param {boolean} skipClimbOverWall
 */
export function taskRappelDownWallUsingClipsetOverride(ped: PedIndex, startPosX: number, startPosY: number, startPosZ: number, ropeAnchorPosX: number, ropeAnchorPosY: number, ropeAnchorPosZ: number, destinationHeight: number, ropeID: RopeIndex, overridenClipSet: string = null!, skipClimbOverWall: boolean = false): void {
	const taskRappelDownWallUsingClipsetOverride_result = Citizen.invokeNative<void>('0x82F4A39274853E9D', ped, startPosX, startPosY, startPosZ, ropeAnchorPosX, ropeAnchorPosY, ropeAnchorPosZ, destinationHeight, ropeID, overridenClipSet, skipClimbOverWall);
	return taskRappelDownWallUsingClipsetOverride_result;
}