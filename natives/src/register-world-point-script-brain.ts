/**
 * BRAIN:REGISTER_WORLD_POINT_SCRIPT_BRAIN
 *
 * 0xA341ACB237C23A75

 * 
 * This command gives a label to a brain script. The label is used by the artist when placing a 2d effect to launch the brain script.
 * This structure currently contains up to 3 sets of coordinates. It always has at least one coord which gives the world position around which the brain is centred.
 * For simplicity BrainLabel has been removed so that the name the artits give the 2deffect needs to match the filename of the script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} scriptName
 * @param {number} activationRange
 * @param {number} setToWhichThisBrainBelongs
 */
export function registerWorldPointScriptBrain(scriptName: string, activationRange: number, setToWhichThisBrainBelongs: number): void {
	const registerWorldPointScriptBrain_result = Citizen.invokeNative<void>('0xA341ACB237C23A75', scriptName, activationRange, setToWhichThisBrainBelongs);
	return registerWorldPointScriptBrain_result;
}