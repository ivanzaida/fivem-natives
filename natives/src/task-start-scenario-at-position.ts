import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_START_SCENARIO_AT_POSITION
 *
 * 0x634E47EF112F3802

 * 
 * Full list of ped scenarios by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/scenariosCompact.json
 * 
 * Also a few more listed at TASK::TASK_START_SCENARIO_IN_PLACE just above.
 * ---------------
 * The first parameter in every scenario has always been a Ped of some sort. The second like TASK_START_SCENARIO_IN_PLACE is the name of the scenario.
 * 
 * The next 4 parameters were harder to decipher. After viewing "hairdo_shop_mp.ysc.c4", and being confused from seeing the case in other scripts, they passed the first three of the arguments as one array from a function, and it looked like it was obviously x, y, and z.
 * 
 * I haven't seen the sixth parameter go to or over 360, making me believe that it is rotation, but I really can't confirm anything.
 * 
 * I have no idea what the last 3 parameters are, but I'll try to find out.
 * 
 * -going on the last 3 parameters, they appear to always be "0, 0, 1"
 * 
 * p6 -1 also used in scrips
 * 
 * p7 used for sitting scenarios
 * 
 * p8 teleports ped to position
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} scenarioName
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} heading
 * @param {number} timeToLeave
 * @param {boolean} playIntroClip
 * @param {boolean} warp
 */
export function taskStartScenarioAtPosition(ped: PedIndex, scenarioName: string, positionX: number, positionY: number, positionZ: number, heading: number, timeToLeave: number = 0, playIntroClip: boolean = false, warp: boolean = true): void {
	const taskStartScenarioAtPosition_result = Citizen.invokeNative<void>('0x634E47EF112F3802', ped, scenarioName, positionX, positionY, positionZ, heading, timeToLeave, playIntroClip, warp);
	return taskStartScenarioAtPosition_result;
}