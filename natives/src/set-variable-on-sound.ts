/**
 * AUDIO:SET_VARIABLE_ON_SOUND
 *
 * 0x3F002AA9562BF0BE

 * 
 * This command allows a scripter to communicate with the sound engine in complex ways,
 * by passing a floating point value to a specific sound object. This allows some nice effects such as adjusting the pitch of a sample being to be played back,
 * or varying a lowpass cutoff. The VariableName parameter must be set up in RAVE (the audio scripting tool) as well as instruction on its usage on a case-by-case
 * basis therefore a sound designer must be consulted with before using this command.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @param {string} variableName
 * @param {number} variableValue
 */
export function setVariableOnSound(soundId: number, variableName: string, variableValue: number): void {
	const setVariableOnSound_result = Citizen.invokeNative<void>('0x3F002AA9562BF0BE', soundId, variableName, variableValue);
	return setVariableOnSound_result;
}