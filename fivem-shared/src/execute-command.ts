/**
 * CFX:EXECUTE_COMMAND
 *
 * 0x561C060B

 * 
 * ------------------------------------------------------------------
 * @param {string} commandString
 */
export function executeCommand(commandString: string): void {
	const executeCommand_result = Citizen.invokeNative<void>('0x561C060B', commandString);
	return executeCommand_result;
}