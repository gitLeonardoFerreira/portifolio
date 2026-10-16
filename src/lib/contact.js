export const WHATSAPP_NUMBER = '5511949876989'
export const CONTACT_EMAIL = 'leomurilobarbosa@gmail.com'

export function buildWhatsAppUrl({ name, company, message }) {
  const cleanName = name.trim()
  const cleanCompany = company.trim()
  const cleanMessage = message.trim()

  if (!cleanName || !cleanMessage) {
    throw new Error('Informe seu nome e sua mensagem.')
  }

  const lines = [
    'Olá, Leonardo! Vim pelo seu portfólio.',
    `Meu nome é ${cleanName}${cleanCompany ? `, da ${cleanCompany}` : ''}.`,
    cleanMessage,
  ]

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n\n'))}`
}
