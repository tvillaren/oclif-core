import {Config} from '../interfaces'
import {SINGLE_COMMAND_CLI_SYMBOL} from '../symbols'

export function toStandardizedId(commandID: string, config: Config): string {
  if (commandID === '.') {
    return SINGLE_COMMAND_CLI_SYMBOL
  }

  return commandID.replaceAll(new RegExp(config.topicSeparator, 'g'), ':')
}

export function toConfiguredId(commandID: string, config: Config): string {
  const defaultTopicSeparator = ':'
  return commandID.replaceAll(new RegExp(defaultTopicSeparator, 'g'), config.topicSeparator || defaultTopicSeparator)
}
