const colors = {
  red: 31,
  green: 32,
  yellow: 33,
}

function logger(color: number, ...message: any[]) {
  console.log(`\x1b[${color}m%s`, ...message, '\x1b[0m')
}

const log = (...message: any[]): void => console.log(...message)

log.info = (...message: any[]): void => logger(colors.green, ...message)
log.warning = (...message: any[]): void => logger(colors.yellow, ...message)
log.error = (...message: any[]): void => logger(colors.red, ...message)

export default log
