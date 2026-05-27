import { NextRequest, NextResponse } from 'next/server'

interface ChatMessage {
  message: string
  userInfo: {
    name: string
    email: string
  }
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatMessage = await request.json()
    const { message, userInfo } = body

    // Email sending via Resend (recommended) or environment-configured service
    // For now, we'll log and return a response
    // To enable email: set RESEND_API_KEY in .env.local

    const emailResponse = await sendEmail({
      from: 'noreply@hallorgroup.com',
      to: 'info@hallorgroup.com',
      subject: `New Chat Message from ${userInfo.name}`,
      html: `
        <h2>New Chat Message</h2>
        <p><strong>From:</strong> ${userInfo.name}</p>
        <p><strong>Email:</strong> ${userInfo.email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><em>Timestamp: ${new Date(body.timestamp).toLocaleString()}</em></p>
      `,
    })

    if (!emailResponse.success) {
      console.warn('Email sending failed:', emailResponse.error)
    }

    // Return bot response
    return NextResponse.json({
      reply: `Thank you for your message, ${userInfo.name}! We've received your inquiry and will get back to you as soon as possible. You can also reach us directly at info@hallorgroup.com or call 1-604-209-9686.`,
      success: true,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      {
        reply: 'Sorry, something went wrong. Please try again or email us directly at info@hallorgroup.com',
        success: false,
      },
      { status: 500 }
    )
  }
}

async function sendEmail(options: {
  from: string
  to: string
  subject: string
  html: string
}): Promise<{ success: boolean; error?: string }> {
  // Try Resend first (modern email service)
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: options.from,
          to: options.to,
          subject: options.subject,
          html: options.html,
        }),
      })

      if (!response.ok) {
        const error = await response.text()
        return { success: false, error }
      }

      return { success: true }
    } catch (error) {
      console.error('Resend error:', error)
      return { success: false, error: String(error) }
    }
  }

  // Fallback: try SendGrid
  if (process.env.SENDGRID_API_KEY) {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: options.to }],
            },
          ],
          from: { email: options.from },
          subject: options.subject,
          content: [
            {
              type: 'text/html',
              value: options.html,
            },
          ],
        }),
      })

      if (response.status !== 202) {
        const error = await response.text()
        return { success: false, error }
      }

      return { success: true }
    } catch (error) {
      console.error('SendGrid error:', error)
      return { success: false, error: String(error) }
    }
  }

  // If no email service is configured, just log (for development)
  console.log('Chat message received (email service not configured):', {
    to: options.to,
    from: options.from,
    subject: options.subject,
    time: new Date().toISOString(),
  })

  return { success: true }
}
