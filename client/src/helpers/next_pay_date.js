export default function nextPayDate (lastPayDate, payFrequency) {
  switch (payFrequency) {
    case 'weekly':
      return lastPayDate + '1 week'
      case 'bi-weekly':
        return lastPayDate + '2 weeks'
      case 'semi-monthly':
        return 'if before the 15th, then 15th, else last day of month'
      case '1st of month':
        return 'first of month'
      case 'last of month':
        return 'last day of month'
      default:
        return alert('Set a pay frequency!')
  }
}
