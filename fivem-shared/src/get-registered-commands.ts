import { RegisteredCommand } from '@ivanzaida/structures'

/**
 * CFX:GET_REGISTERED_COMMANDS
 *
 * 0XD4BEF069

 * Returns all commands that are registered in the command system.The data returned adheres to the following layout:```[{"name": "cmdlist"},{"name": "command1"}]```
 * 
 * ------------------------------------------------------------------
 * @returns {RegisteredCommand}  An object containing registered commands.
 */
export function getRegisteredCommands(): RegisteredCommand[] {
	const getRegisteredCommands_result = Citizen.invokeNative<RegisteredCommand[]>('0XD4BEF069', Citizen.resultAsObject());
	return getRegisteredCommands_result;
}