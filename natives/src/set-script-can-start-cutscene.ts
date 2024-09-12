import { Threadid } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_SCRIPT_CAN_START_CUTSCENE
 *
 * 0xA82578E07F14DD90

 * This command only needs to be called if the script that loads the cutscene is not the same as the script that starts the scene
 * This will largely be used by the main script requesting a scene and then allowing the mission script to start it.
 * Sets the cutscene's owning thread ID.
 * 
 * ------------------------------------------------------------------
 * @param {Threadid} scriptThread
 */
export function setScriptCanStartCutscene(scriptThread: Threadid): void {
	const setScriptCanStartCutscene_result = Citizen.invokeNative<void>('0xA82578E07F14DD90', scriptThread);
	return setScriptCanStartCutscene_result;
}